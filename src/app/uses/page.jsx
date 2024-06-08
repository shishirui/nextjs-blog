import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="15” MacBook Air M3, 16GB RAM (2024)">
            I was using an 13” MacBook Air M1 prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Appl Studio Display (Standard Glass)">
            The Appl Studio Display is by far the best fit for a Macbook I have ever used, and at 27” it is a perfect size. Also, I have an LG 27” UltraFine 5K monitor that is also great.
          </Tool>
          <Tool title="Keyboard">
            Most of the time I use the Macbook Air is own keyboard. If I am playing a game, I might use a keyboard made by Ninz or Kyodo.
          </Tool>
          <Tool title="AirPods Pro">
            I have been using Airpods since Apple introduced them. The best thing about it is that it is easy to carry around, for example, it is great on airplanes and while riding a bike.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text">
            I do not care if it is missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that are not
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="Visual Studio Code">
            Visual Studio Code does most of my development, and its power needs no introduction. Vim is also my favorite code editor, and I use it more often for ad-hoc editing scenarios.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            Using Raycast instead of spotlight is a wonderful experience. Alfred was great before that, but Raycast is even better.          </Tool>
          <Tool title="Shottr">
            Shottr is a great screenshot tool that I use to mark problems and areas for improvement on web pages.
          </Tool>
          <Tool title="Wecom">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
