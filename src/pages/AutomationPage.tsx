import { ChevronUp } from "tabler-icons-react";
import { Cards } from "../components/Cards/Card";
import { Carousel, Embla } from "@mantine/carousel";
import { useCallback, useEffect, useState } from "react";
import { Autocomplete, Progress, rem } from "@mantine/core";
import classes from "./AutomationPage.module.css";
import { IconSearch } from "@tabler/icons-react";
import { Tables } from "../components/Table/Table";
import instantReply from "../assets/instantReply.jpg";
import awayMessage from "../assets/awaymessage.webp";
import identifiedMessage from "../assets/identifiedmessage.jpeg";
import customKeywords from "../assets/customKeywords.jpg";
import contactInformation from "../assets/contactInformation.jpg";
import hours from "../assets/hours.jpg";
import location from "../assets/location.png";

export default function AutomationPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);
  return (
    <div
      className="w-100  p-10"
      style={{
        backgroundColor: "#5078f2",
        backgroundImage: "linear-gradient(315deg, #5078f2 0%, #efe9f4 100%)",
      }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Inbox <span className="text-gray-500">&gt; </span>{" "}
          <span className="text-blue-500">Automations</span>
        </h2>
        <button className="bg-[#0a78be] text-base p-3 text-white rounded-md">
          +&nbsp;Create automation
        </button>
      </div>
      <div className="pt-5">
        <div className=" bg-[#FFFFFF] rounded-md">
          <div className="p-5">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Automations
              </h1>
              <p className="text-sm pt-2 pb-4">
                Set up automations that manage your conversations and streamline
                your workflows, giving you more time to focus on your business.
              </p>
              <hr />
            </div>
            <div className="pt-2 flex items-center">
              <h1 className="text-xl font-semibold tracking-tight flex">
                Suggested for you{" "}
                <span className="pl-1">
                  <button className="hover:bg-[#fbfbfb] px-2 py-1 rounded-md">
                    <ChevronUp />
                  </button>
                </span>
              </h1>
            </div>
            <div className="p-5">
              <Carousel
                withIndicators
                slideSize="20%"
                slideGap="md"
                align="start"
                dragFree
                getEmblaApi={setEmbla}
                initialSlide={1}
                classNames={classes}
              >
                <Carousel.Slide>
                  <Cards
                    image={instantReply}
                    label="Instant reply"
                    text="Reply with a greeting when someone message you for the first time."
                    goal="Greet people"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Cards
                    image={awayMessage}
                    label="Away message"
                    text="Reply to messages when you're not available."
                    goal="Greet people"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Cards
                    image={identifiedMessage}
                    label="Identify unanswered messages"
                    text="Find messages that haven't received a reply."
                    goal="Organize messages"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Cards
                    image={customKeywords}
                    label="Custom keyword"
                    text="Reply to messages that contains specific keywords."
                    goal="Share information"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Cards
                    image={contactInformation}
                    label="Contact information"
                    text="Reply to messages asking for your contact information."
                    goal="Share information"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Cards
                    image={hours}
                    label="Hours"
                    text="Reply to messages asking for your hours."
                    goal="Share information"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Cards
                    image={location}
                    label="Location"
                    text="Reply to messages asking for your location."
                    goal="Share information"
                  />
                </Carousel.Slide>
              </Carousel>
              <Progress
                value={scrollProgress}
                maw={"100%"}
                size="sm"
                mt="xl"
                mx="auto"
              />
            </div>
            <div className="pt-2 flex items-center">
              <h1 className="text-xl font-semibold tracking-tight flex">
                Your automations
              </h1>
            </div>
            <div className="p-5">
              <Autocomplete
                className={classes.search}
                placeholder="Search"
                leftSection={
                  <IconSearch
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                // data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                visibleFrom="xs"
              />
            </div>
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
}
