import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { useEffect, useState } from "react";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { User } from "../../types/User";

type Props = {
  users: User[],
}

export const HomePage: React.FC<Props> = ({ users }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading
        ? <LoadingPage />
        : (
          <div>
            <Header />
            <Main users={users} />
            <Footer />
            <Outlet />
          </div>
        )}
    </div>
  );
}

export default HomePage;