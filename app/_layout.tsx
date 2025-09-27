import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { LogtoProvider, LogtoConfig, UserScope } from '@logto/rn';
import { UserContext } from "@/context/UserContext";
import { use, useState } from "react";





export default function RootLayout() {
  // app/_layout.tsx বা entry file (যেমন index.js) এর একদম শুরুর দিকে
if (typeof localStorage === "undefined" || localStorage === null) {
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    length: 0,
    clear: () => {},
    key: () => null,
  };
}

  const [loaded, error] = useFonts({
    outfit: require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
  })



  const config: LogtoConfig = {
    endpoint: 'https://19dnvd.logto.app/',
    appId: 'udodcs0gszkb6qd1mqja3',
  scopes:[
    UserScope.Email,
    UserScope.Profile,
  ],
  };

  const [user,setUser]= useState();
  return (
    <LogtoProvider config={config}>
      <UserContext.Provider value={{user,setUser}}>
      <Stack>
        <Stack.Screen name="Landing" options={{ headerShown: false }} />
      </Stack>
      </UserContext.Provider>
    </LogtoProvider>
  );
}
