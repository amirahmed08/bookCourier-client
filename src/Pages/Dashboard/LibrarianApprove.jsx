import React from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { FaUserCheck } from 'react-icons/fa6'
import { IoPersonRemove } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'
import Swal from 'sweetalert2'

const LibrarianApprove = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: librarians = [] } = useQuery({
        queryKey: ['librarians', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/librarians')
            return res.data;
        }
    })

    const updateLibrarianStatus = (librarian, status) => {
        const updateInfo = {status: status , email : librarian.email}
        axiosSecure.patch(`/librarians/${librarian._id}`, updateInfo)
        .then(res => {
            if(res.data.modifiedCount){ 
                refetch();
                     Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Librarian has approved properly  ",
                        showCancelButton: false,
                        timer: 2500
                    })
            }
        })
    }


    const handleApproval = librarian => {
        updateLibrarianStatus(librarian, 'approved')
    }

    const handleRemove = librarian => {
        updateLibrarianStatus(librarian, 'rejected')
    }
    
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-5'>Librarian Pending Approval: {librarians.length} </h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Mobile No.</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            librarians.map((librarian, index) =><tr key={librarian._id}>
                            <th>{index+1}</th>
                            <td>{librarian.name}</td>
                            <td>
                                {
                                    <p className={`${librarian.status==='approved' ? 'text-green-800' : 'text-red-800'}`}>{librarian.status}</p>
                                }
                            </td>
                            <td>{librarian.phone}</td>
                            <td>{librarian.email}</td>
                            <td> 
                                <button onClick={() => handleApproval(librarian)} className='btn'>
                                    <FaUserCheck />
                                </button>
                                <button onClick={() => handleRemove(librarian)} className='btn mx-2'>
                                    <IoPersonRemove />
                                </button>
                                <button className='btn'>
                                    <MdDeleteOutline />
                                </button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LibrarianApprove