import React from "react";

//function InfoOrders({totalOfOrderw}){
function InfoOrders(){
    return(
      <div className="infoOrders w-96 h-fit mx-auto bg-gray-100  border rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-slate-900 text-white p-5">
          Total de pedidios
        </div>
        
        <div>
          <div className="flex justify-between py-3 px-1 border border-b-black">
            <p>Costo de envío: </p>
            <p>{`$${0}`}</p>
          </div>
          <div className="flex justify-between py-3 px-1 border border-b-black ">
            <p>Número de items: </p>
            <p>{`$${0}`}</p>
          </div>
          <div className="flex justify-between py-3 px-1">
            <p>ID del pedido</p>
            <p>{`$${0}`}</p>
          </div>
        </div>

        <div className="flex justify-between bg-slate-900 p-5 text-white">
          <p>Orders total: </p>
          <p>{`$${1000}`}</p>
        </div>
      </div>    
    );
}

export {InfoOrders};