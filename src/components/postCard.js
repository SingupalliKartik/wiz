import React,{useState} from "react";
import AddComment from "./addComment";


const PostCard = ({setClicked}) => {
    const arr2 = [1, 2, 3, 4, 5];
    const arr1 = [1];
const [Comments , ShowComments] = useState(false)
    return (
        <>
    {Comments ? <AddComment setClicked={ShowComments}/>:
        <div className={`w-full flex-col space-y-2 p-1 `}>
            {/* profile */}
            <div className="py-2 flex space-x-2 align-middle justify-between">
                <div className="flex space-x-4 align-middle">
                    <div>
                        <img
                            className="rounded-full h-12 w-12"
                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt=""
                        />
                    </div>
                    <div className="flex flex-col text-white justify-center">
                        <div className="text-xl font-medium">Project Name</div>
                        <div className="text-xs font-normal text-[#D9D9D9]">Name</div>
                    </div>
                </div>
                <div>
                    <button className="bg-[#FFFFFF] bg-opacity-5 py-2 px-4 w-full text-xs text-[#A4A4A4] border-none rounded-lg">
                        General Post
                    </button>
                </div>
            </div>
            {/* content */}
            <div className="text-white text-md">
                Stop scratching your head all day, searching right tool to start with,
                betterbuild is your all in one place.
            </div>
            {/* tags */}
            <div className="flex flex-wrap mb-1">
                {arr2.map((item, index) => (
                    <div key={index} className="bg-[#7501E9] py-1 px-4 mx-1 my-1 w-[fit-content] text-xs text-white border-none rounded-full">
                        tags
                    </div>
                ))}
            </div>
            {/* image */}
            <img
                className="h-72  w-full rounded-2xl"
                src="https://plus.unsplash.com/premium_photo-1671429290842-04b1c341dbb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
            {/* icons */}
            <div className="flex justify-between align-middle p-2">
                <div className="flex">
                    <button>
                    <div className="flex space-x-2 text-white mr-3 align-middle">
                        <div className="flex align-middle justify-center flex-col">
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 8.18182C20 7.69961 19.8084 7.23714 19.4675 6.89617C19.1265 6.55519 18.664 6.36364 18.1818 6.36364H12.4364L13.3091 2.20909C13.3273 2.11818 13.3364 2.01818 13.3364 1.91818C13.3364 1.54545 13.1818 1.2 12.9364 0.954545L11.9727 0L5.99091 5.98182C5.65455 6.31818 5.45455 6.77273 5.45455 7.27273V16.3636C5.45455 16.8458 5.6461 17.3083 5.98708 17.6493C6.32805 17.9903 6.79052 18.1818 7.27273 18.1818H15.4545C16.2091 18.1818 16.8545 17.7273 17.1273 17.0727L19.8727 10.6636C19.9545 10.4545 20 10.2364 20 10V8.18182ZM0 18.1818H3.63636V7.27273H0V18.1818Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="text-[#A4A4A4] opacity-90">355</div>
                    </div>
                    </button>
                    <button onClick={() => {
                        setClicked(2)
                        ShowComments(true)
                        }} >
                    <div className="flex space-x-2 text-white mr-3 align-middle">
                        <div className="flex align-middle justify-center flex-col">
                            <svg
                                width="18"
                                height="15"
                                viewBox="0 0 20 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 0C4.5 0 0 3.125 0 6.875C0 9.375 2.5 11.625 5 12.875C5 15.5 2.5 16.375 2.5 16.375C6 16.375 8 14.75 8.875 13.75H10C15.5 13.75 20 10.625 20 6.875C20 3.125 15.5 0 10 0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="text-[#A4A4A4] opacity-90">12</div>
                    </div>
                    </button>
                    <button>
                    <div className="flex space-x-2 text-white mr-3 align-middle">
                        <div className="flex align-middle justify-center flex-col">
                            <svg
                                width="16"
                                height="22"
                                viewBox="0 0 18 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 23.4286V2.85714C0 2.15 0.252 1.54486 0.756 1.04171C1.26 0.53857 1.86514 0.28657 2.57143 0.285713H15.4286C16.1357 0.285713 16.7413 0.537713 17.2453 1.04171C17.7493 1.54571 18.0009 2.15086 18 2.85714V23.4286L9 19.5714L0 23.4286Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="text-[#A4A4A4] opacity-90">13</div>
                    </div>
                    </button>
                </div>
                <div className="flex flex-col justify-center">
                    <button>

                  
                    <svg
                        width="18"
                        height="20"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.6667 22.2222C15.7407 22.2222 14.9537 21.8981 14.3056 21.25C13.6574 20.6019 13.3333 19.8148 13.3333 18.8889C13.3333 18.7593 13.3426 18.6248 13.3611 18.4856C13.3796 18.3463 13.4074 18.2215 13.4444 18.1111L5.61111 13.5556C5.2963 13.8333 4.94444 14.0511 4.55556 14.2089C4.16667 14.3667 3.75926 14.4452 3.33333 14.4444C2.40741 14.4444 1.62037 14.1204 0.972222 13.4722C0.324074 12.8241 0 12.037 0 11.1111C0 10.1852 0.324074 9.39815 0.972222 8.75C1.62037 8.10185 2.40741 7.77778 3.33333 7.77778C3.75926 7.77778 4.16667 7.85667 4.55556 8.01444C4.94444 8.17222 5.2963 8.38963 5.61111 8.66667L13.4444 4.11111C13.4074 4 13.3796 3.87518 13.3611 3.73667C13.3426 3.59815 13.3333 3.4637 13.3333 3.33333C13.3333 2.40741 13.6574 1.62037 14.3056 0.972222C14.9537 0.324074 15.7407 0 16.6667 0C17.5926 0 18.3796 0.324074 19.0278 0.972222C19.6759 1.62037 20 2.40741 20 3.33333C20 4.25926 19.6759 5.0463 19.0278 5.69444C18.3796 6.34259 17.5926 6.66667 16.6667 6.66667C16.2407 6.66667 15.8333 6.58815 15.4444 6.43111C15.0556 6.27407 14.7037 6.0563 14.3889 5.77778L6.55556 10.3333C6.59259 10.4444 6.62037 10.5696 6.63889 10.7089C6.65741 10.8481 6.66667 10.9822 6.66667 11.1111C6.66667 11.24 6.65741 11.3744 6.63889 11.5144C6.62037 11.6544 6.59259 11.7793 6.55556 11.8889L14.3889 16.4444C14.7037 16.1667 15.0556 15.9493 15.4444 15.7922C15.8333 15.6352 16.2407 15.5563 16.6667 15.5556C17.5926 15.5556 18.3796 15.8796 19.0278 16.5278C19.6759 17.1759 20 17.963 20 18.8889C20 19.8148 19.6759 20.6019 19.0278 21.25C18.3796 21.8981 17.5926 22.2222 16.6667 22.2222Z"
                            fill="white"
                        />
                    </svg>   
                    </button>   
                    </div>
            </div>
            {/* Comments (not sure) */}
            {arr1.map((item, index) => (
                <div key={index} className="bg-[#F0F0F0] bg-opacity-5 py-3 px-4 my-3 rounded-xl text-[#EDEDED]">
                    <div className="pb-2 flex space-x-4 align-middle justify-between">
                        <div className="flex space-x-4 align-middle">
                            <div>
                                <img
                                    className="rounded-full h-12 w-12"
                                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt=""
                                />
                            </div>
                            <div className="flex flex-col text-white justify-center">
                                <div className="text-lg">Name</div>
                                <div className="text-xs text-[#D9D9D9] font-light">UserName</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-wrap  truncate">
                        Stop scratching your head all day, searching right tool to start
                    </div>
                </div>
            ))}
        </div>
    }
        </>
    );
};

export default PostCard;
