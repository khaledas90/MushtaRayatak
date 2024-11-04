import React from 'react'
import { Link } from 'react-router-dom'

export default function HeadProductDetails({ title }) {
    return (
        <>
            <section className="bg-gray-100 py-8 mb-4 px-6">
                <div className="flex items-center">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-3 md:mb-0">
                                <h2 className="text-2xl font-bold">{title}</h2>
                                <p className="text-gray-600 mt-2">Very us move be blessed multiply night</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <nav>
                                    <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                                    <span className="mx-2 text-gray-400">/</span>
                                    <a href="#" className="text-gray-500 hover:text-blue-700">{title}</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
