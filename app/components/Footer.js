export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <span className="footer-left">
          © {currentYear} Arnav Mishra — All rights reserved
        </span>

        <div className="footer-links">
          <a
            href="https://github.com/Arnav-techy"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/arnav-mishra-20aug/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </div>
      </div>
    </footer>
  );
}
