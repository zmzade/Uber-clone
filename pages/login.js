import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { provider, auth } from "../firbase";

const Login = () => {
  const router = useRouter();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, [router]);

  return (
    <Page>
      <Wrapper>
        <Uberlogo src="http://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        <Title>Log in to access your account</Title>
        <HeadImage src="http://i.ibb.co/CsV9RYZ/login-image.jpg" />

        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
          Sign in with Google
        </SignInButton>
      </Wrapper>
    </Page>
  );
};

export default Login;
const Page = tw.div`
bg-white h-screen w-screen`;

const Wrapper = tw.div`
bg-gray-200 flex flex-col px-20 py-10 m-20 w-90 h-90
`;

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`;
const Uberlogo = tw.img`
h-20 w-auto object-contain self-start
`;
const Title = tw.div`
text-5xl pt-4 text-gray-500
`;
const HeadImage = tw.img`
object-contain w-full h-40
`;
