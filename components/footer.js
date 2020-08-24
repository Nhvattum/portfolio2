import React from 'react'

export default function Footer() {
    return(
        <div className="footer">
            <p className="footerSide"></p>
            <p className="createdBy">Created by Nick Hvattum ©2020</p>
            <p className="footerSide">
                <a href="https://www.linkedin.com/in/nick-hvattum-0008a417b/">
                    <img src="/linkedin-footer.png" />
                </a>
                <a className="githubLink" href="https://github.com/Nhvattum">
                    <img src="/github-footer.png" />
                </a>
            </p>
        </div>
    )
}