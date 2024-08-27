import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import { Center, LoadingOverlay, Pagination, Select, Table } from '@mantine/core';
import { getTodo } from '../utiles/Api';


function TodoPage() {
  const [ page , setPage] = useState(1)
  const [limit , setLimit] = useState(10)
  const {data , isLoading, isError} = useQuery({ queryKey : ['fetch-todo', page, limit], 
    queryFn :() => getTodo(page, limit)})
    if (isLoading) return <LoadingOverlay visible={true} />;
    if (isError) return <div>Error</div>;
    
  return (
    <div>
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
          <Table.Th>completed</Table.Th>
        </Table.Tr>
      </Table.Thead>
        <Table.Tbody>
          {
          data?.data.map((value) =>{
            return(
              <Table.Tr key={value.id}>
                <Table.Td>{value.id}</Table.Td>
                <Table.Td>{value.title}</Table.Td>
                <Table.Td>{value.completed ? 'completed' : 'in completed'}</Table.Td>
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

export default TodoPage