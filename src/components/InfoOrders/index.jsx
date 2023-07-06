import React from "react";

//function InfoOrders({totalOfOrderw}){
function InfoOrders(){
    return(
      <div className="infoOrders w-96 h-96 mx-auto bg-gray-100  border rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-slate-900 text-white p-5">
          Total de pedidios
        </div>
        
        <div>
          <div className="flex justify-between">
            <p>Algo</p>
            <p> otra cosa</p>
          </div>
          <div className="flex justify-between">
            <p>Algo</p>
            <p> otra cosa</p>
          </div>
          <div className="flex justify-between">
            <p>Algo</p>
            <p> otra cosa</p>
          </div>
        </div>

        <div className="flex justify-between bg-slate-900 p-3 text-white">
          <p>Orders total: </p>
          <p>{`$${1000}`}</p>
        </div>
      </div>    
    );
}

export {InfoOrders};