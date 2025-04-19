import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: calc(1.5rem + 1.5vh) calc(1.2rem + 1.75vw);

  /* Hero Content */
  .hero-content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr; /* Single column layout */
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center; /* Center-aligned text for a clean look */
    animation: fadeIn 0.8s ease-in;
  }

  /* Heading */
  h1 {
    font-size: clamp(2rem, 5vw, 3rem); /* Responsive font size */
    font-weight: 900;
    letter-spacing: 1.5px;
    line-height: 1.2;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #3b82f6, #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }

  /* Paragraph */
  p {
    font-size: clamp(1rem, 2vw, 1.25rem); /* Responsive font size */
    font-weight: 400;
    line-height: 1.7;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: #475569;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto; /* Center the paragraph */
  }

  /* Button Group */
  .btn-grp {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  /* Button */
  .btn {
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 600;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem); /* Responsive font size */
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #6366f1); /* Blue to indigo gradient */
    padding: 0.8rem 2.5rem;
    border-radius: 9999px; /* Pill shape */
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); /* Soft glow */
    cursor: pointer;
  }

  .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
    background: linear-gradient(135deg, #3b82f6, #818cf8); /* Lighter hover gradient */
  }

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    h1 {
      font-size: clamp(1.5rem, 4vw, 2rem);
    }

    p {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }

  /* Fade-In Animation */
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