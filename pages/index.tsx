import type { NextPage } from "next";
import Head from "next/head";
import { NavLinks, PageTitle, SourceLink } from "../components";

const Page1: NextPage = () => {
  return (
    <div>
      <Head>
        <title>தமிழ்நாடு பொறியியல் படிப்புகள் கலந்தாய்வு வழிகாட்டி - 1</title>
        <meta
          name="description"
          content="தமிழ்நாடு பொறியியல் படிப்புகள் கலந்தாய்வு வழிகாட்டி - 1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="பகுதி - 1" />
      <div>
        <p>அறிமுகம்</p>
        <p>
          தமிழ்நாட்டில் பொறியியல் படிப்புகள் கலந்தாய்வு முழுக்க முழுக்க
          இணையத்தில் நடைபெறுகிறது.
        </p>
        <p>
          மாணவர்கள் பெற்ற மதிப்பெண்கள் அடிப்படையில் இது நான்கு சுற்றுகளாக
          நடைபெறுகிறது.
        </p>
        <p>
          ஒவ்வொரு சுற்றிலும் மாணவர்கள் விரும்பும் கல்லூரிகளை இட்டு நிரப்ப 2
          நாட்கள் அவகாசம் வழங்கப்படும்.
        </p>
        <p>மாணவர்கள் குறிப்பிட்ட விருப்பங்களின் அடிப்படையில்,</p>
        <p>
          மூன்றாவது நாள் Tentative (உத்தேசமான) கல்லூரி, படிப்பு சேர்க்கைப்
          பட்டியல் அளிக்கப்படும்.
        </p>
        <p>
          அதை நீங்கள் ஏற்றுக் கொள்ளலாம், மறுக்கலாம், அல்லது தற்போது கிடைத்ததை
          விட நல்ல கல்லூரி, துறை கிடைத்தால் ஏற்றுக் கொள்கிறேன் என்று சொல்லலாம்.
        </p>
        <p>நான்காவது நாள் இறுதிக்குள் நீங்கள் இதை உறுதி செய்தால்,</p>
        <p>
          ஐந்தாம் நாள் உறுதியான சேர்க்கைப் பட்டியல் வெளியிடப்படும். இதை நீங்கள்
          மாற்ற முடியாது.
        </p>
        <p>
          அதன் பிறகு நீங்கள் கல்லூரியில் சென்று சான்றிதழ்களைக் காட்டி சேர்க்கையை
          உறுதி செய்யலாம்.
        </p>
        <p>இது தான் அடிப்படை வழிமுறை.</p>
        <p>
          இதில் நீங்கள் செய்ய வேண்டியது, செய்யக் கூடாதது, தெரிந்து வைத்திருக்க
          வேண்டியது போன்றவற்றை அடுத்தடுத்த பாகங்களில் பார்ப்போம்.
        </p>
      </div>
      <div>
        <SourceLink href="https://www.facebook.com/groups/1143641272471082/posts/1949976021837599/">
          Source article link
        </SourceLink>
      </div>
      <NavLinks>
        <div>&nbsp;</div>
        <SourceLink href="/page-2">Next</SourceLink>
      </NavLinks>
    </div>
  );
};

export default Page1;
