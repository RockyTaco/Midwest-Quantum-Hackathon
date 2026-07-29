import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreRegisterForm from "@/components/PreRegisterForm";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <span className="badge badge-purple">Join the waitlist</span>
            <h1 className={styles.title}>Submit Pre-Registration Interest</h1>
            <p className={styles.subtitle}>
              Secure early access to signup portals, request regional travel vans, and sign up for 
              advance quantum programming crash courses.
            </p>
          </div>
          <PreRegisterForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
