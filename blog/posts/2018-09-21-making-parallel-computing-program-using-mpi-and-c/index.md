### **Making Parallel Computing Program Using MPI and C**
#### Friday, September 21, 2018

According to Wikipedia, Parallel computing is a type of computation in which many calculations or the 
execution of processes are carried out simultaneously. Large problems can often be divided into smaller 
ones, which can then be solved at the same time. There are several different forms of parallel computing: 
bit-level, instruction-level, data, and task parallelism. Parallelism has long been employed in 
high-performance computing, but it's gaining broader interest due to the physical constraints preventing 
frequency scaling. As power consumption (and consequently heat generation) by computers has become a 
concern in recent years, parallel computing has become the dominant paradigm in computer architecture, 
mainly in the form of multi-core processors.

Message Passing Interface (MPI) is a standardized and portable message-passing standard designed by a group of researchers from academia and industry to function on a wide variety of parallel computing architectures. The standard defines the syntax and semantics of a core of library routines useful to a wide range of users writing portable message-passing programs in C, C++, and Fortran. There are several well-tested and efficient implementations of MPI, many of which are open-source or in the public domain. These fostered the development of a parallel software industry, and encouraged development of portable and scalable large-scale parallel applications.  

C (/siː/, as in the letter c) is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations. By design, C provides constructs that map efficiently to typical machine instructions, and therefore it has found lasting use in applications that had formerly been coded in assembly language, including operating systems, as well as various application software for computers ranging from supercomputers to embedded systems. 

Okay now we're going to make Parallel Computing program using MPI and C

<p align="center">
	<img src="./posts/2018-09-21-making-parallel-computing-program-using-mpi-and-c/1.png" height="250px" alt="My MPI MD5 brute force">
</p>

> You would need at least basic knowledge about writing program in C before proceed!

Here i'm using my cluster computer i made in previous article

compile and execute mpi
```
mpicc main.c -o main
mpiexec -np 4 ./main
```

call mpi library
```
#include <mpi.h>
```

initializing mpi. must be first mpi function called
```
MPI_Init(&argc,&argv);
```

finalize mpi. must be the last mpi function
```
MPI_Finalize();
```

get the rank of all node
```
MPI_Comm_rank(MPI_COMM_WORLD, &rank);
```

mpi communication
```
MPI_Send(MSG,MSGCNT,MPIDATATYPE,DEST,SRC,MPI_COMM_WORLD);
MPI_Recv(MSG,MSGCNT,MPIDATATYPE,SRC,DEST,MPI_COMM_WORLD,STATUS);
```

MPIDATATYPE can be
```
MPI_CHAR
MPI_SHORT
MPI_INT
MPI_LONG
MPI_UNSIGNED_CHAR
MPI_UNSIGNED_SHORT
MPI_UNSIGNED
MPI_FLOAT
MPI_DOUBLE
MPI_LONG_DOUBLE
```

line below is mpi hello world. thanks to mpitutorial
```c
// Author: Wes Kendall
// Copyright 2011 www.mpitutorial.com
// This code is provided freely with the tutorials on mpitutorial.com. Feel
// free to modify it for your own use. Any distribution of the code must
// either provide a link to www.mpitutorial.com or keep this header intact.
//
// An intro MPI hello world program that uses MPI_Init, MPI_Comm_size,
// MPI_Comm_rank, MPI_Finalize, and MPI_Get_processor_name.
//
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
  // Initialize the MPI environment. The two arguments to MPI Init are not
  // currently used by MPI implementations, but are there in case future
  // implementations might need the arguments.
  MPI_Init(NULL, NULL);

  // Get the number of processes
  int world_size;
  MPI_Comm_size(MPI_COMM_WORLD, &world_size);

  // Get the rank of the process
  int world_rank;
  MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

  // Get the name of the processor
  char processor_name[MPI_MAX_PROCESSOR_NAME];
  int name_len;
  MPI_Get_processor_name(processor_name, &name_len);

  // Print off a hello world message
  printf("Hello world from processor %s, rank %d out of %d processors\n",
         processor_name, world_rank, world_size);

  // Finalize the MPI environment. No more MPI calls can be made after this
  MPI_Finalize();
}
```

#### Source
<https://en.wikipedia.org/wiki/Parallel_computing>

<https://en.wikipedia.org/wiki/Message_Passing_Interface>

<https://en.wikipedia.org/wiki/C_(programming_language)>

<http://mpitutorial.com/tutorials/mpi-hello-world/>
