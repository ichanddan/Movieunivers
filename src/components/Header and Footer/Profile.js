import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { userRef } from "../../firebase/firebase";
import { getDocs } from "firebase/firestore";
import { Puff } from "react-loader-spinner";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const snapshot = await getDocs(userRef);
        const data = snapshot.docs.map(doc => doc.data());
        if (data.length > 0) {
          setUserData(data[1]); // Assuming there's only one document in the collection
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Puff />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          {userData && (
            <div className="bg-white overflow-hidden shadow rounded-lg border">
              <div className="flex items-center justify-center p-10">
                <Avatar
                  isBordered
                  src={userData.Image || "https://i.pravatar.cc/150?u=a04258a2462d826712d"}
                  className="w-40 h-40"
                />
              </div>
              <div>
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User Profile
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    This is some information about the user.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {userData.Name}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {userData.Email}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {userData.Number}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {userData.Address}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
