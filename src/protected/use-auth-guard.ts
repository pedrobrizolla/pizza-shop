import { getProfile } from "@/api/get-profile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthGuard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await getProfile();
        setLoading(false);
      } catch (error) {
        navigate("/sign-in");
      }
    };

    verifyAuth();
  }, [navigate]);

  return { loading };
}
