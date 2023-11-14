function Footer() {
    return(
        <div className={"bg-dark p-4 text-white"}>
            <p className="text-center">
                copyright @{new Date().getFullYear()} by <a className={"text-white"} target={"_blank"} href="https://www.iba-suk.edu.pk" rel="noreferrer">Sukkur IBA University</a>
            </p>
        </div>
    )
}

export default Footer;