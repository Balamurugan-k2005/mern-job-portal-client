import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { getAllHandler } from "../utils/FetchHandlers";
import LoadingComTwo from "../components/shared/LoadingComTwo";

// Reusable Card Component
const InfoCard = ({ count, label, fromColor, toColor, iconColor, svgPath }) => {
  return (
    <div
      className={`relative p-5 bg-gradient-to-r ${fromColor} ${toColor} rounded-md overflow-hidden`}
    >
      <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
        {count}
      </div>
      <div className="relative z-10 text-blue-100 leading-none font-semibold">
        {label}
      </div>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 ${iconColor} opacity-50`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={svgPath}
        />
      </svg>
    </div>
  );
};

const Admin = () => {
  const { isPending, data } = useQuery({
    queryKey: ["admin_info"],
    queryFn: () =>
      getAllHandler(
        `https://mern-job-portal-server-kappa.vercel.app/api/v1/admin/info`
      ),
  });

  if (isPending) return <LoadingComTwo />;

  const userIconPath = `M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z`;
  const calendarIconPath = `M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`;

  return (
    <Wrapper>
      <div>
        <h2 className="text-lg md:text-xl font-semibold capitalize mb-3 text-gray-700">
          User Info
        </h2>
        <div className="card-container">
          <InfoCard
            count={data?.user}
            label="Total Members"
            fromColor="from-blue-400"
            toColor="to-blue-600"
            iconColor="text-blue-700"
            svgPath={userIconPath}
          />
          <InfoCard
            count={data?.admin}
            label="Admins"
            fromColor="from-cyan-400"
            toColor="to-cyan-600"
            iconColor="text-cyan-700"
            svgPath={userIconPath}
          />
          <InfoCard
            count={data?.recruiter}
            label="Recruiters"
            fromColor="from-cyan-400"
            toColor="to-cyan-600"
            iconColor="text-cyan-700"
            svgPath={userIconPath}
          />
          <InfoCard
            count={data?.applicant}
            label="Applicants"
            fromColor="from-blue-400"
            toColor="to-blue-600"
            iconColor="text-blue-700"
            svgPath={userIconPath}
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg md:text-xl font-bold capitalize mb-3 text-gray-700">
          Job Info
        </h2>
        <div className="card-container">
          <InfoCard
            count={data?.job}
            label="Total Jobs"
            fromColor="from-orange-400"
            toColor="to-orange-600"
            iconColor="text-orange-700"
            svgPath={calendarIconPath}
          />
          <InfoCard
            count={data?.pending}
            label="Pending"
            fromColor="from-green-400"
            toColor="to-green-600"
            iconColor="text-green-700"
            svgPath={userIconPath}
          />
          <InfoCard
            count={data?.interview}
            label="Interview"
            fromColor="from-purple-400"
            toColor="to-purple-600"
            iconColor="text-purple-700"
            svgPath={userIconPath}
          />
          <InfoCard
            count={data?.declined}
            label="Declined"
            fromColor="from-red-400"
            toColor="to-red-600"
            iconColor="text-red-700"
            svgPath={calendarIconPath}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 250px));
    gap: 20px;
  }
  @media screen and (max-width: 900px) {
    .card-container {
      grid-template-columns: repeat(3, minmax(auto, 300px));
    }
  }
  @media screen and (max-width: 640px) {
    .card-container {
      grid-template-columns: repeat(2, minmax(auto, 300px));
    }
  }
  @media screen and (max-width: 450px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default Admin;
