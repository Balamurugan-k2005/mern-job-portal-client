import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: calc(1.5rem + 1.5vh) calc(1.2rem + 1.75vw);

  .hero-content {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(auto, 600px) minmax(auto, 450px);
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    animation: fadeIn 0.8s ease-in;
  }

  h1 {
    font-size: calc(1.5rem + 2vw);
    font-weight: 800;
    letter-spacing: 1.5px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h1 .fancy {
    background: linear-gradient(90deg, #3b82f6, #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }

  p {
    font-size: calc(1rem + 0.2vw);
    font-weight: 300;
    line-height: 1.7;
    text-align: justify;
    margin-top: 2rem;
    margin-bottom: 2.2rem;
    color: #475569;
    max-width: 600px;
  }

  .btn-grp {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 1rem;
  }

.btn {
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  font-size: calc(1rem + 0.2vw);
  color: #fff;
  background: linear-gradient(135deg, #2563eb, #6366f1); /* blue to indigo gradient */
  padding: 0.75rem 2rem;
  border-radius: 9999px; /* pill shape */
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); /* soft glow */
  position: relative;
  overflow: hidden;
}

.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.4s;
}

.btn:hover::after {
  left: 100%;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
  background: linear-gradient(135deg, #3b82f6, #818cf8); /* lighter hover gradient */
}


  .placeholder {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .placeholder img {
    width: 100%;
    max-width: 100%;
    border-radius: 12px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .placeholder img:hover {
    transform: scale(1.03);
  }

  @media screen and (max-width: 768px) {
    .hero-content {
      display: flex;
      flex-direction: column-reverse;
    }

    .text-content {
      margin-top: 1.75rem;
      text-align: center;
    }

    .placeholder {
      justify-content: center;
    }

    .placeholder img {
      width: 100%;
      max-width: 400px;
      border-radius: 10px;
    }

    h1 {
      font-size: calc(1.25rem + 1.5vw);
    }

    p {
      margin-top: 1.5rem;
      margin-bottom: 2rem;
    }

    .btn-grp {
      justify-content: center;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Wrapper;