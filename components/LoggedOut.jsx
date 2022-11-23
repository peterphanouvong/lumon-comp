import Link from "next/link";
import Image from "next/image";

export const LoggedOut = () => {
  return (
    <>
      <main className="center">
        <div className="container pb-5">
          <div className="spacing-3">
            <Image src="/logo.png" alt="Lumon logo" width={120} height={52.8} />
          </div>
          <p className="text-body-2 spacing-2">
            Come now, children of my industry, and know the children of my
            blood.
          </p>
          <div>
            <Link className="btn btn-dark" href="/api/auth/login">
              SVRD ACCESS
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer"></footer>
    </>
  );
};
