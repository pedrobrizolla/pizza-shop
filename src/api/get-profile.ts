import { api } from "@/lib/axios";

interface GetProfileResponse {
  email: string;
  id: string;
  name: string;
  phone: string | null;
  role: "manager" | "customer";
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getProfile(): Promise<GetProfileResponse> {
  const response = await api.get("/me", { withCredentials: true });
  return response.data;
}
