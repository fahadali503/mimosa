import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies";

export const gssp = (getServerSideProps: GetServerSideProps) => {
    return async (context: GetServerSidePropsContext) => {
        const { req } = context;
        const cookies = parseCookies({ req });
        const token = cookies.authToken;
        // @ts-ignore
        return await getServerSideProps({ ...context, token })
    }
}