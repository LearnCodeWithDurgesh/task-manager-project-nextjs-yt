import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);

  return result;
}
