import footer from "@data/footer.json";

export default function Footer({}) {
  return (
    <footer className="footer pt-xxl-19 pt-8 pb-sm-7 pb-5" id="footer">
      <div className="container-fluid">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="social-icon">
                <ul className="list-unstyled">
                  {footer.social.map((link, i) => (
                    <li key={i}>
                      <a href={`${link.link}`}>
                        <i className={link.icon} aria-hidden="true">
                          <span className="visually-hidden">
                            {link.icon_alt}
                          </span>
                        </i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {footer.sections.map((section, i) => (
              <div className="col-6 col-md-3 col-lg-2 order-1" key={i}>
                <div className="footer-widget">
                  <h3 className="">{section.title}</h3>
                  <ul className="list-unstyled">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href={`${link.link}`}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="footer-logo"
            >
              <p>
                © Copyright <span>{new Date().getFullYear()}</span>{" "}
                {footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
