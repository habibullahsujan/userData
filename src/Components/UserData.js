import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleData from "./SingleData";

const UserData = ({userData,refetch}) => {
 
  return (
    <div>
      <h3 className="text-center">User Previous Data:</h3>
      {userData.map((data) => (
        <SingleData userData={data} refetch={refetch} key={data._id} />
      ))}
    </div>
  );
};

export default UserData;
