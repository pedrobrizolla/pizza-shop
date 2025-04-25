import { api } from "@/lib/axios";

export async function getProfile() {
  return await api.get("/me", { withCredentials: true });
}
