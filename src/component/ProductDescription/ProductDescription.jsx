import React, { useState } from 'react';
import classNames from 'classnames';
import ReactStars from 'react-rating-stars-component';
import ReviewProduct from '../Swipper/Review/ReviewSlider';
import CommentSlider from '../Swipper/Comment/CommentSlider';
const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const [restaurantRating, setRestaurantRating] = useState(0);

    const ratingChanged = (newRating) => {
        setRestaurantRating(newRating);
    };
    return (
        <section className="product_description_area py-8 px-10">
            <div className="container mx-auto px-4">
                <ul className="flex border-b border-gray-300 mb-6">
                    <li className="mr-1">
                        <button
                            className={classNames(
                                'inline-block py-2 px-4 text-sm font-medium border rounded-t-lg',
                                {
                                    '  bg-[#efab31] text-white': activeTab === 'description',
                                    'text-gray-500': activeTab !== 'description',
                                }
                            )}
                            onClick={() => handleTabChange('description')}
                        >
                            Description
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={classNames(
                                'inline-block py-2 px-4 text-sm font-medium border rounded-t-lg',
                                {
                                    'bg-[#efab31] text-white': activeTab === 'specification',
                                    'text-gray-500': activeTab !== 'specification',
                                }
                            )}
                            onClick={() => handleTabChange('specification')}
                        >
                            Specification
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={classNames(
                                'inline-block py-2 px-4 text-sm font-medium border rounded-t-lg',
                                {
                                    'bg-[#efab31] text-white': activeTab === 'comments',
                                    'text-gray-500': activeTab !== 'comments',
                                }
                            )}
                            onClick={() => handleTabChange('comments')}
                        >
                            Comments
                        </button>
                    </li>
                    <li>
                        <button
                            className={classNames(
                                'inline-block py-2 px-4 text-sm font-medium border rounded-t-lg',
                                {
                                    'bg-[#efab31] text-white': activeTab === 'reviews',
                                    'text-gray-500': activeTab !== 'reviews',
                                }
                            )}
                            onClick={() => handleTabChange('reviews')}
                        >
                            Reviews
                        </button>
                    </li>
                </ul>
                <div className="tab-content">
                    {activeTab === 'description' && (
                        <div className="tab-pane">
                            <p className='text-[#6f6f6f] text-[16px] '>
                                Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                            </p>
                            <p className='text-[#6f6f6f] text-[16px] mt-2 mb-3'>
                                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less
                            </p>
                        </div>
                    )}
                    {activeTab === 'specification' && (
                        <div className="tab-pane">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Attribute
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Width</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">128mm</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Height</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">508mm</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Depth</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85mm</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Weight</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">52gm</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Quality checking</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">yes</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Freshness Duration</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03days</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">When packeting</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Without touch of hand</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Each Box contains</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60pcs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === 'comments' && (
                        <div className="tab-pane">
                            <div className="card bg-base-100 w-full mt-5 py-4 px-6">
                                <div className="card-body">
                                    <h2 className="card-title mb-5 text-[#efab31] text-[20px]">Add a comment</h2>
                                    <div className="">
                                        <div className="mb-4">
                                            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your Comment</label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="bg-[#efab31] transition-all duration-500 hover:bg-[#c4943b] text-white font-bold mt-2 py-2 px-4 rounded">
                                            Add
                                        </button>
                                    </div>
                                    <div className="mt-5">
                                        <CommentSlider />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div className="tab-pane">
                            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

                                        <div className="mt-2 flex items-center gap-2 sm:mt-0">
                                            <div className="flex items-center gap-0.5">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        className="h-4 w-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(4.6)</p>
                                            <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                                                645 Reviews
                                            </a>
                                        </div>
                                    </div>

                                    <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
                                        <div className="shrink-0 space-y-4">
                                            <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">4.65 out of 5</p>
                                            <button
                                                type="button"
                                                data-modal-target="default-modal"
                                                data-modal-toggle="default-modal"
                                                className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                onClick={() => document.getElementById('my_modal_3').showModal()}
                                            >
                                                Write a review
                                            </button>
                                        </div>

                                        <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <div className="flex items-center gap-2" key={index}>
                                                    <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                        {5 - index}
                                                    </p>
                                                    <svg
                                                        className="h-4 w-4 shrink-0 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                    </svg>
                                                    <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                                        <div
                                                            className="h-1.5 rounded-full bg-yellow-300"
                                                            style={{ width: `${(5 - index) * 20}%` }}
                                                        />
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                                                    >
                                                        {index === 0 ? '239' : index === 1 ? '432' : index === 2 ? '53' : index === 3 ? '32' : '13'}
                                                        <span className="hidden sm:inline"> reviews</span>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                                <dialog id="my_modal_3" className="modal w-1/3">
                                    <div className="modal-box py-5 px-6 relative">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>

                                        <div className="bodyCard">
                                            <form action="">
                                                <div className="flex items-center mb-4">
                                                    <div className="">
                                                        <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-white">
                                                            Star Rating
                                                        </label>
                                                        <div className="flex items-center">
                                                            <ReactStars
                                                                count={5}
                                                                onChange={ratingChanged}
                                                                size={30}
                                                                isHalf={true}
                                                                emptyIcon={<i className="far fa-star"></i>}
                                                                halfIcon={<i className="fas fa-star-half-alt"></i>}
                                                                fullIcon={<i className="fas fa-star"></i>}
                                                                activeColor="#ffd700"
                                                                value={restaurantRating}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                                        Review Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                                        Review Description
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        rows="6"
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                        required
                                                    ></textarea>
                                                </div>

                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className="bg-[#efab31] transition-all duration-500 hover:bg-[#c4943b] text-white font-bold mt-2 py-2 px-4 rounded"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </section>
                            <div className="w-full">
                                <ReviewProduct />
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;
