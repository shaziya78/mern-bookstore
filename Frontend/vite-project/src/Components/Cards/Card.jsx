import React from "react";


export default function Card({ item }) {
  console.log(item);
  return (
    <>
      <div className="my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl mt-20 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h4 className="card-title">
          {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h4>
           <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-pink-500 border-[2px] hover:text-white duration-200 px-2 py-1 rounded-full">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
