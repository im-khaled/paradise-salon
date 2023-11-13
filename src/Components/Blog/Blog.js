import React from 'react';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className='my-10 bg-amber-500 text-white text-center h-24'>
                <div className='h-full flex justify-center items-center text-4xl p-5 font-semibold'>
                    <p>Blog</p>
                </div>
            </div>
            <div className='mt-20 mx-10 px-4 max-md:mx-2'>
                <div className='grid grid-cols-4 py-8 gap-5 border-b'>
                    <div className='leading-5 max-sm:hidden'>
                        <p>SQL & NOSQL</p>
                        <p>7 NOV 2023</p>
                    </div>
                    <div className='col-span-2 max-lg:col-span-3'>
                        <h1 className='font-bold text-4xl'>Difference between SQL and NoSQL</h1>
                        <div className='text-gray-600'>
                            <p className='py-5'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. The five critical differences between SQL vs NoSQL are:</p>
                            <ol className='space-y-5'>
                                <li>1. SQL databases are relational, NoSQL databases are non-relational.</li>
                                <li>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                                <li>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                                <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                                <li>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 py-8 gap-5 border-b'>
                    <div className='leading-5 max-sm:hidden'>
                        <p>JWT</p>
                        <p>8 NOV 2023</p>
                    </div>
                    <div className='col-span-2 max-lg:col-span-3'>
                        <h1 className='font-bold text-4xl'>What is JWT, and how does it work?</h1>
                        <div className='text-gray-600'>
                            <p className='py-5'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
                            
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 py-8 gap-5 border-b'>
                    <div className='leading-5 max-sm:hidden'>
                        <p>JAVASCRIPT VS NODE JS</p>
                        <p>9 NOV 2023</p>
                    </div>
                    <div className='col-span-2 max-lg:col-span-3'>
                        <h1 className='font-bold text-4xl'>
                            What is the difference between javascript and NodeJS?
                        </h1>
                        <div className='text-gray-600'>
                            <p className='py-5'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                            <p>
                                Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                            </p>
                            <p className='py-5'>
                                Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                            </p>
                          
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 py-8 gap-5'>
                    <div className='leading-5 max-sm:hidden'>
                        <p>NODE JS FUNCTIONS</p>
                        <p>11 NOV 2023</p>
                    </div>
                    <div className='col-span-2 max-lg:col-span-3'>
                        <h1 className='font-bold text-4xl'>
                            How does NodeJS handle multiple requests at the same time?
                        </h1>
                        <div className='text-gray-600'>
                            <p className='py-5'>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;