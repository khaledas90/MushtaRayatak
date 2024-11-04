import React, { useState } from 'react'
import Items from '../component/items/items'
import all_product from '../assets/all_product';
export default function Products() {
    const [visibleItems, setVisibleItems] = useState(4);

    const showMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };
    return (
        <>
            <div className="Products px-8 py-10">
                <section className="cat_product_area section_gap py-12">
                    <div className="container mx-auto">
                        <div className="flex flex-row-reverse">
                            <div className="w-full lg:w-3/4">
                                <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
                                        <ul className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
                                            <li className="flex items-center cursor-pointer outline-none group">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                                                        d="M19.7778 9.33333V9.33333C19.7778 8.09337 19.7778 7.47339 19.6415 6.96472C19.2716 5.58436 18.1934 4.50616 16.8131 4.1363C16.3044 4 15.6844 4 14.4444 4C12.963 4 11.4815 4 10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20C11.3333 20 12.6667 20 14 20C15.6554 20 16.4831 20 17.1459 19.7588C18.2569 19.3544 19.1322 18.4791 19.5365 17.3681C19.7778 16.7053 19.7778 15.8776 19.7778 14.2222V14.2222M16.6667 14.2222H20.2222C21.2041 14.2222 22 13.4263 22 12.4444V11.1111C22 10.1293 21.2041 9.33333 20.2222 9.33333H16.6667C15.6848 9.33333 14.8889 10.1293 14.8889 11.1111V12.4444C14.8889 13.4263 15.6848 14.2222 16.6667 14.2222Z"
                                                        stroke="#4F46E5"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                                <span className="font-normal text-lg leading-8 text-indigo-600 ml-2 mr-3 transition-all duration-500 group-hover:text-indigo-600">
                                                    Finance
                                                </span>
                                                <button className="flex aspect-square h-6 rounded-full border border-indigo-600 items-center justify-center font-manrope font-medium text-base text-indigo-600 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                                                    8
                                                </button>
                                            </li>

                                            <li className="flex items-center cursor-pointer outline-none group">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                                                        d="M10 14.2449C9.55209 14.2449 7.76925 14.2449 6 14.2449C4.11438 14.2449 3.17157 14.2449 2.58579 13.6591C2 13.0733 2 12.1305 2 10.2449V10.0816C2 8.19601 2 7.25321 2.58579 6.66742C3.17157 6.08163 4.11275 6.08163 5.99512 6.08163C9.46482 6.08163 14.4728 6.08163 18 6.08163C19.8856 6.08163 20.8284 6.08163 21.4142 6.66742C22 7.25321 22 8.19599 22 10.0816C22 10.136 22 10.1905 22 10.245C22 12.1306 22 13.0733 21.4142 13.6591C20.8284 14.2449 19.8856 14.2449 18 14.2449C16.2308 14.2449 14.4479 14.2449 14 14.2449M20.6667 17.2381C20.6667 17.3697 20.6667 17.6444 20.6667 17.9986C20.6667 19.8851 20.6667 20.8284 20.0809 21.4142C19.4951 22 18.5523 22 16.6667 22H7.33333C5.44772 22 4.50491 22 3.91912 21.4142C3.33333 20.8284 3.33333 19.8856 3.33333 18V17.2381M15.3333 6.08163V5.33333C15.3333 4.08718 15.3333 3.4641 15.0654 3C14.8898 2.69596 14.6374 2.44349 14.3333 2.26795C13.8692 2 13.2462 2 12 2V2C10.7538 2 10.1308 2 9.66667 2.26795C9.36263 2.44349 9.11015 2.69596 8.93462 3C8.66667 3.4641 8.66667 4.08718 8.66667 5.33333V6.08163M11.3333 16.966H12.6667C13.403 16.966 14 16.3569 14 15.6054V12.8844C14 12.1329 13.403 11.5238 12.6667 11.5238H11.3333C10.597 11.5238 10 12.1329 10 12.8844V15.6054C10 16.3569 10.597 16.966 11.3333 16.966Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600">
                                                    Management
                                                </span>
                                                <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                                                    3
                                                </span>
                                            </li>

                                            <li className="flex items-center cursor-pointer outline-none group">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                                                        d="M9.69081 22H13.537M11.6139 2V3.53846M18.4123 4.8163L17.3244 5.90416M4.8155 4.81701L5.90336 5.90486M2 11.6154H3.53846M19.6893 11.6154H21.2278M7.53442 15.6948C5.2814 13.4418 5.2814 9.78895 7.53442 7.53593C9.78744 5.28291 13.4403 5.28291 15.6933 7.53593C17.9464 9.78895 17.9464 13.4418 15.6933 15.6948C13.4403 17.9478 9.78744 17.9478 7.53442 15.6948Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="font-normal text-lg leading-8 text-black ml-2 mr-3 transition-all duration-500 group-hover:text-indigo-600">
                                                    Marketing
                                                </span>
                                                <button className="flex aspect-square h-6 rounded-full border border-black items-center justify-center font-manrope font-medium text-base text-black transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                                                    4
                                                </button>
                                            </li>
                                        </ul>

                                        <div className="flex flex-col items-start sm:items-center sm:flex-row gap-2 sm:gap-4">
                                            <select className="px-4 py-2 cursor-pointer outline-none border border-indigo-600 rounded-lg font-normal text-base leading-7 text-indigo-600">
                                                <option>Sort By</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                            <div className="flex items-center p-2 gap-2 cursor-pointer outline-none border border-indigo-600 rounded-lg">
                                                <svg
                                                    width="18"
                                                    height="20"
                                                    viewBox="0 0 18 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8.49371 9.93537L10.2186 11.6603M8.49371 9.93537C8.16425 9.74735 7.77692 9.64514 7.38079 9.64514C6.98466 9.64514 6.59733 9.74735 6.26787 9.93537C5.75187 10.2467 5.31478 10.6848 5.00347 11.2008C4.81546 11.5303 4.71326 11.9176 4.71326 12.3137C4.71326 12.7099 4.81546 13.0972 5.00347 13.4266C5.31478 13.9427 5.75187 14.3808 6.26787 14.6921C6.59733 14.8801 6.98466 14.9823 7.38079 14.9823C7.77692 14.9823 8.16425 14.8801 8.49371 14.6921C8.82317 14.5041 9.10081 14.2294 9.30253 13.8907M8.49371 9.93537L11.765 6.66407C12.0482 6.38091 12.0482 5.92242 11.765 5.63927L10.2435 4.1178C9.96036 3.83464 9.50186 3.83464 9.2187 4.1178L5.9474 7.38909C5.66425 7.67224 5.66425 8.13074 5.9474 8.41389L7.46887 9.93537M15.3713 13.8332V18.1229C15.3713 18.2336 15.327 18.3389 15.2492 18.4168C15.1713 18.4947 15.066 18.5389 14.9553 18.5389H1.57972C1.469 18.5389 1.36367 18.4947 1.28583 18.4168C1.20799 18.3389 1.16371 18.2336 1.16371 18.1229V4.74733C1.16371 4.6366 1.20799 4.53127 1.28583 4.45343C1.36367 4.37559 1.469 4.33131 1.57972 4.33131H7.1198C7.28658 4.33131 7.44399 4.40004 7.56004 4.51609L8.98582 5.94187C9.10187 6.05792 9.27027 6.12665 9.43705 6.12665H14.9553C15.066 6.12665 15.1713 6.1709 15.2492 6.24874C15.327 6.32658 15.3713 6.43191 15.3713 6.54264V8.54666"
                                                        stroke="#4F46E5"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <span className="font-normal text-sm leading-6 text-indigo-600">
                                                    Filter
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="latest_product_inner">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {all_product.slice(0, visibleItems).map((item) => (
                                            <Items
                                                key={item.id}
                                                id={item.id}
                                                image={item.image}
                                                name={item.name}
                                                NewPrice={item.new_price}
                                                OldPrice={item.old_price}
                                                offer={item.id === 2 || item.id === 4 ? '20% OFF' : undefined}
                                                isOffer={item.id === 2 || item.id === 4}
                                            />
                                        ))}

                                    </div>
                                </div>
                            </div>


                            <div className="w-full lg:w-1/4 mt-10 lg:mt-0">
                                <div className="grid mr-4">
                                    <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                                        <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                                            <h6 className="font-medium text-base leading-7 text-black mb-5">Filter</h6>
                                            <div className="flex items-center mb-5 gap-1">
                                                <div className="relative w-full">
                                                    <select id="FROM" className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                                        <option selected>Min</option>
                                                        <option value="option 1">Option 1</option>
                                                        <option value="option 2">Option 2</option>
                                                        <option value="option 3">Option 3</option>
                                                        <option value="option 4">Option 4</option>
                                                    </select>
                                                    <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <p className="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
                                                <div className="relative w-full">
                                                    <select id="TO" className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                                        <option selected>Max</option>
                                                        <option value="option 1">Option 1</option>
                                                        <option value="option 2">Option 2</option>
                                                        <option value="option 3">Option 3</option>
                                                        <option value="option 4">Option 4</option>
                                                    </select>
                                                    <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <label for="zip-code" className="block mb-2 text-sm font-medium text-gray-600 w-full">Zip Code</label>
                                            <div className="relative w-full mb-8">
                                                <select id="zip-code" className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                                    <option selected>Write code</option>
                                                    <option value="option 1">Option 1</option>
                                                    <option value="option 2">Option 2</option>
                                                    <option value="option 3">Option 3</option>
                                                    <option value="option 4">Option 4</option>
                                                </select>
                                                <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>

                                            <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200">
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Search
                                            </button>
                                        </div>

                                        <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                                            <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                                                <p className="font-medium text-base leading-7 text-black">Filter Plans</p>
                                                <p className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">RESET</p>
                                            </div>

                                            <div className="w-full mb-7">
                                                <div className="accordion-group grid grid-cols-1 gap-5 sm:gap-9" data-accordion="default-accordion">
                                                    <div className="accordion" id="category-heading-one">
                                                        <button className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600" aria-controls="category-collapse-one">
                                                            <h5 className="font-medium text-sm text-gray-900">Availability</h5>
                                                            <svg className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </button>
                                                        <div id="category-collapse-one" className="accordion-content w-full px-0 overflow-hidden pr-4 max-h-0" aria-labelledby="category-heading-one">
                                                            <div className="box flex flex-col gap-2 mt-5">
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-1" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-1" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 1</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-2" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-2" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 2</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-3" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-3" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 3</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-4" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-4" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 4</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion" id="category-heading-two">
                                                        <button className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600" aria-controls="category-collapse-two">
                                                            <h5 className="font-medium text-sm text-gray-900">View</h5>
                                                            <svg className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </button>
                                                        <div id="category-collapse-two" className="accordion-content w-full px-0 overflow-hidden pr-4 max-h-0" aria-labelledby="category-heading-two">
                                                            <div className="box flex flex-col gap-2 mt-5">
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-5" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-5" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 5</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-6" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-6" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 6</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-7" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-7" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 7</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-8" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-8" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 8</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion" id="category-heading-three">
                                                        <button className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600" aria-controls="category-collapse-three">
                                                            <h5 className="font-medium text-sm text-gray-900">Operation</h5>
                                                            <svg className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </button>
                                                        <div id="category-collapse-three" className="accordion-content w-full px-0 overflow-hidden pr-4 max-h-0" aria-labelledby="category-heading-three">
                                                            <div className="box flex flex-col gap-2 mt-5">
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-9" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-9" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 9</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-10" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-10" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 10</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-11" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-11" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 11</label>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <input id="checkbox-option-12" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500 rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                                    <label for="checkbox-option-12" className="ml-1 font-normal text-xs cursor-pointer text-gray-600">Option 12</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-700/50 focus:outline-none mt-6">Apply</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center'>
                            {visibleItems < all_product.length ? <button onClick={showMoreItems} className='bg-[#efab31] transition-all duration-500 hover:bg-[#c4943b] text-white font-bold mt-7 py-2 px-4 rounded'> Show More</button> : <p className="text-[18px] text-gray-600">No More Items </p>}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
