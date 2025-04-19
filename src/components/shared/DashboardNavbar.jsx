import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { useDashboardContext } from "../../Layout/DashboardLayout";

const DashboardNavbar = () => {
  const { setShowSidebar, handleLogout } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-container">
        {/* Sidebar Toggler */}
        <div className="start">
          <button
            className="toggler"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <FiLogOut className="icon" />
          </button>
        </div>

        {/* Logout Button */}
        <div className="end">
          <button className="logout" onClick={handleLogout}>
            <FiLogOut className="text-lg mr-1" /> Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  padding: 1rem calc(1rem + 0.7vw);
  background-color: var(--color-white);
  z-index: 1;

  .nav-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  
  .start .toggler {
    font-weight: 900;
    font-size: 28px;
    color: var(--color-primary);
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.14);
    width: max-content;
    padding: 3px;
    transition: all 0.3s linear;
  }

  .start .toggler:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .end .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--color-danger);
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .end .logout:hover {
    color: #b91c1c; /* Darker red on hover */
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
  }

  
`;

export default DashboardNavbar;