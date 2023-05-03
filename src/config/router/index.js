import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../../views/Home'
import Layout from '../../components/Layout'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default Router