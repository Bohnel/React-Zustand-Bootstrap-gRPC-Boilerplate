import { type LoginBody } from "@/types/auth";
import { setItem } from "@/lib/localStorage";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

// const transport = new GrpcWebFetchTransport({
//   baseUrl: import.meta.env.VITE_GRPC_ENDPOINT,
//   format: "binary"
// });
// const client = new <GRPCSERVICECLIENT>(transport);

export const login = async (body: LoginBody): Promise<any> => {
  const request: LoginRequest = {
    username: body.username,
    password: body.password,
  }
  const response = await client.login(request);
  setItem("authToken", response.response.accessToken)
  return response.response
}

export const logout = async () => {
  const res = new Promise<boolean>((resolve) => {
    setItem("authToken", null);
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  return await res;
};
