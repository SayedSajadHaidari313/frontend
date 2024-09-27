import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import { Center, LoadingOverlay, Pagination, Select, Table } from '@mantine/core';
import { getTodo } from '../utiles/Api';
import { Link } from 'react-router-dom';


function PostsPage() {
  const [ page , setPage] = useState(1)
  const [limit , setLimit] = useState(10)
  const {data , isLoading, isError} = useQuery({ queryKey : ['fetch-todo', page, limit], 
    queryFn :() => getTodo(page, limit)})
    if (isLoading) return <LoadingOverlay visible={true} />;
    if (isError) return <div>Error</div>;
    
  return (
    <div>
      <Link to={"/todo"}>go back to todo</Link>
       <Select
        label="per page"
        placeholder="10"
        value={limit} 
        onChange={setLimit}
        data={['10', '20', '30', '40']}
      />
     <Table striped withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Tittle</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
        <Table.Tbody>
          {
          data?.data.map((value) =>{
            return(
              <Table.Tr key={value.id}>
                <Table.Td>{value.id}</Table.Td>
                <Table.Td>{value.title}</Table.Td>
                <Table.Td>
                  <Link to={`/post/${value.id}`}>More</Link>
                </Table.Td>
              </Table.Tr>
            )
          })
          }
        </Table.Tbody>
      </Table>
      <Center mt={'lg'}>
      <Pagination value={page} onChange={setPage} total={200/limit}/>
      </Center>
    </div>
  )
}

export default PostsPage