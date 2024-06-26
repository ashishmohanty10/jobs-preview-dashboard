import Image from "next/image";
import React from "react";
import Logo from "../../public/logo2.svg";

const Company = () => {
  return (
    <div className="py-6 pl-[80px] shadow">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <Image src={Logo} alt="Brand Logo" />
          <p className="text-[#4F4F4F] text-xl font-medium">Atlassian</p>
        </div>

        <div className="flex items-center gap-x-12">
          {/* right side */}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <p className="text-[#6E6D6D] font-medium text-sm">Company size</p>
              <p className="text-[#3D3D3D] font-medium text-lg">
                1k-2k Employees
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-[#6E6D6D] font-medium text-sm">Sector</p>
              <p className="text-[#3D3D3D] font-medium text-lg">
                Information Technology, Infrastucture
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-[#6E6D6D] font-medium text-sm">Founded In</p>
              <p className="text-[#3D3D3D] font-medium text-lg">2019</p>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <p className="text-[#6E6D6D] font-medium text-sm">Type</p>
              <p className="text-[#3D3D3D] font-medium text-lg">Private</p>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-[#6E6D6D] font-medium text-sm">Funding</p>
              <p className="text-[#3D3D3D] font-medium text-lg">Bootstrapped</p>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-[#6E6D6D] font-medium text-sm">Founded By</p>
              <p className="text-[#3D3D3D] font-medium text-lg">
                <a
                  target="blank"
                  href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw"
                >
                  Scott Farquhar,{" "}
                </a>
                <a
                  target="blank"
                  href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA"
                >
                  Mike Cannon-Brookes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
