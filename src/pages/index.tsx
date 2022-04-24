import React, { useEffect, useState } from 'react';

import { Alert, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import Link from 'next/link';

import Header from '../components/Header';

import Head from 'next/head';

import { Delete } from '@mui/icons-material';

import axios from 'axios';
import { useRouter } from 'next/router';

 
interface Iitem {
  id: number,
  name: string,
  email: string,
  cpf: string,
  age: string,
}

const Home: React.FC = () => {  
  const [ rows, setRows ] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/students").then(({ data }) => {
      setRows(data.students);
    }).catch(e => console.log("ERROR", e));
  }, []);



  return(
    <>
      <Head>
        <title>
          Students
        </title>
      </Head>
      <main>
        <Header />
        
        <Typography
          textAlign="center"
          marginTop="100px"
          fontFamily="Poppins"
          fontSize="30px"
          color="#4a4a4a"
        >
          Students
        </Typography>

        {rows.length > 0 ? (
        <TableContainer
        style={{ width: "60%", margin: "50px auto", border: "1px solid #4a4a4a", borderRadius: "5px"}}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontFamily: "Roboto", fontWeight: 500 }}
              >
                Name
              </TableCell>
              
              <TableCell
                style={{ fontFamily: "Roboto", fontWeight: 500  }}
              >
                E-mail
              </TableCell>
              
              <TableCell
                style={{ fontFamily: "Roboto", fontWeight: 500  }}
              >
                Age
              </TableCell>
              
              <TableCell
                style={{ fontFamily: "Roboto", fontWeight: 500  }}
              >
                Cpf
              </TableCell>

              <TableCell
                style={{ fontFamily: "Roboto", fontWeight: 500  }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          
          
            <TableBody>
            
              { rows.map((item: Iitem) => {
                  return(
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.age}</TableCell>
                      <TableCell>{item.cpf}</TableCell>
                      <TableCell>
                        <Link href={{
                          pathname: "/deleteStudent",
                          query: { id: item.id, name: item.name }
                        }} passHref>
                          <Delete style={{ fill: "#4a4a4a", cursor: "pointer"}}/>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
              })}  

            </TableBody>       
        </Table>
      </TableContainer>
      ) : (
        <Container
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Alert severity="info">
          There are no Students registered in our system.   
            <Link href="/addStudent" passHref> click here </Link> 
            to create a student
          </Alert>
        </Container>
      )}
      </main>
    </>
  );
}

export default Home;
