"use client";

// DRAFT landing page for CS 4130 Spring 2027. Items marked TODO need confirming before publishing.

import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const prose = { lineHeight: 1.7, color: 'var(--ifm-color-emphasis-800)' };

export default function Home() {
  return (
    <Layout title="Welcome" description="CS 4130: Engineering LLM-Integrated Systems, Spring 2027">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Hero */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.25rem' }}>
            CS 4130: Engineering LLM-Integrated Systems
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
            Spring 2027 &middot; Prof. Jonathan Bell &middot; Tue/Fri 9:50–11:30 AM &middot; {/* TODO: room */}Room TBA
          </p>
          <img
            className="hero-art"
            src={useBaseUrl('/img/brand/hero-copilot.webp')}
            alt="Cartoon of a cheerful boxy robot driving a little convertible down an open road, while a husky in a red bandana rides beside it, holding the map with one paw and the brake with the other"
            style={{ display: 'block', width: '100%', margin: '0 auto 2rem' }}
          />

          <p style={prose}>
            Wiring an LLM into a product takes an afternoon. Building software that people keep using, and that does real good for them and for everyone else it touches, is as hard as it ever was. An LLM adds new ways to fail:
          </p>

          <ul style={{ lineHeight: 1.7, color: 'var(--ifm-color-emphasis-800)' }}>
            <li><strong>You build the wrong thing.</strong> A syllabus says "your lowest quiz score is dropped." Lowest by points or by percentage, when the quizzes are out of different totals? Does a quiz you missed count as your lowest? What about one you were excused from? Before or after late penalties? A model will pick an answer to each of these without asking you, and the demo will look fine. <em>Does your system do what its owner meant, or only what they said?</em></li>
            <li><strong>It's wrong, and nobody can tell.</strong> The output changes from run to run and is right most of the time. The instructor who owns that policy will never read your code, so they approve what they're shown. <em>What can a person confirm without understanding the whole system?</em></li>
            <li><strong>You can't keep up with your customers.</strong> Rules change every semester and every season, and every new client has different ones. If each change needs an engineer, the company never grows past a handful of clients. <em>When the requirements change, who has to decide: the owner, someone with more authority, or an engineer?</em></li>
            <li><strong>You get breached, and it's your name on it.</strong> The model follows instructions hidden in the documents it reads, and an agent wrote much of the code that's supposed to stop it. <em>When an agent writes the code, who answers for it?</em></li>
            <li><strong>It costs more than it earns.</strong> Every model call costs money. A feature that's cheap in a demo can cost more per customer than the customer pays, and model prices go up as well as down. <em>Which parts of your system belong in a model, and which belong in code?</em></li>
          </ul>

          <p style={prose}>
            This course is about those questions. You'll build an LLM-integrated system, first on your own and then as a team, for real users with real rules. Over the semester you'll find out what those users need, measure the system, attack it, keep it within a budget, change it when they change their minds, and decide what it should and shouldn't do.
          </p>

        </div>

        {/* Topics */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>Topics (tentative)</h2>
          <ul style={{ lineHeight: 1.8, color: 'var(--ifm-color-emphasis-800)' }}>
            <li><strong>How LLMs work, enough to predict them:</strong> tokens, sampling, and context; why output varies from run to run; how models are trained; which failures scaling fixes and which it doesn't</li>
            <li><strong>Conceptual design:</strong> concepts, purposes, and synchronizations (Daniel Jackson's <em>The Essence of Software</em>), and why they matter more when an LLM writes the code</li>
            <li><strong>Specifications as decisions:</strong> finding what a requirement leaves open, and recording which decisions are settled, assumed, unresolved, or someone else's to make</li>
            <li><strong>Calling models from code:</strong> structured output, tools, and MCP</li>
            <li><strong>Evaluating systems whose output varies:</strong> oracles, LLM judges and how to validate them, pass@k and pass^k, confidence intervals, comparing models</li>
            <li><strong>LLMs as the user interface:</strong> chat, generated questions, and generated views; what a person should confirm, and how to keep them from trusting fluent text too much</li>
            <li><strong>User research for LLM features:</strong> interviews, observation, and asking users what they'd trust a system to generate</li>
            <li><strong>Grounding:</strong> retrieval, embeddings, long context, agentic search, and designing tools for a model to use</li>
            <li><strong>Prompting techniques and how long they last:</strong> few-shot examples, chain of thought, program-aided prompting, measured on several models</li>
            <li><strong>Security:</strong> prompt injection, threat models, least privilege, and enforcing policy in code</li>
            <li><strong>Human oversight:</strong> confirmation, escalation, recovery, and who answers when the system is wrong</li>
            <li><strong>Ethics and society:</strong> who a system affects, fairness across groups, consent, automated decisions, and AI ethics review</li>
            <li><strong>Operating LLM systems:</strong> cost, latency, routing between models, model upgrades, and turning failures into tests</li>
            <li><strong>The research frontier:</strong> current papers on agents, evaluation, and verification, and what newer models will make unnecessary</li>
          </ul>
        </div>

        {/* The project */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>The project</h2>
          <p style={prose}>
            Every business runs on rules that only the people doing the work fully understand: how a dental office books and confirms appointments, how a contractor prices a change order, how an instructor turns a semester of work into a grade. Your team builds the software that lets those people state their own rules, connects the rules to the systems they already use, and uses an LLM where it helps without letting it decide what it shouldn't.
          </p>
          <p style={prose}>
            The LLM drafts the rules from a plain-language description and asks about the cases it leaves open. Deterministic code runs the rules. The person who owns them confirms what they mean by looking at examples and generated views, not at code. Your team answers for how the pieces fit together.
          </p>
          <p style={prose}>
            The standard is the same for every team: build as much of the system as you honestly can in deterministic code, with evidence that it's right. Every decision your system makes goes in an <em>assurance manifest</em>, in one of three places: deterministic with evidence, an LLM judgment with limits on what it can affect, or escalated to a person. We grade how complete the manifest is, whether each decision is in the right place, and whether your evidence catches bugs we plant.
          </p>
        </div>

        {/* Structure */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>Course structure (preview)</h2>
          <p style={prose}>
            The project runs on a two-week cycle, with something due at the end of each one. The first two weeks are individual. After that you work in teams that form in week 3. {/* TODO: team size */}The details will change before January.
          </p>

          <h3>Weeks 1–2: Grading policies, on your own</h3>
          <p style={prose}>
            Everyone builds the same thing first, individually: a TypeScript command-line tool that turns a course's grading policy, as written in its syllabus, into rules a computer can apply. The LLM drafts the policy and raises the questions the syllabus never answered. The instructor confirms each decision, and the tool shows which students a decision affects before it takes effect. The instructor is your product owner, and real grading policies, including one with the rulings its instructor had to make mid-semester, are the test cases. The tool uses the same architecture as Pawtograder's command-line tool, and it runs model calls through your own Claude Code account.
          </p>

          <h3>Weeks 3–9: Your own product</h3>
          <p style={prose}>
            Now your team is the product owner. Choose one of two tracks:
          </p>
          <ul style={{ lineHeight: 1.8, color: 'var(--ifm-color-emphasis-800)' }}>
            <li><strong>Pawtograder:</strong> a feature beyond grading policies, such as creating and versioning exams, setting up programming assignments, surveys, discussion topics, or office-hours queues. Your users are instructors, TAs, and students.</li>
            <li><strong>An external partner:</strong> a real person who does the work, whether a business owner or a roommate on a dental-assistant co-op. Partners are approved by week 3, and the system uses only synthetic data.</li>
          </ul>
          <p style={prose}>
            Either way, you start with user research. Your requirements have to trace back to real users. Those users confirm the examples your system is tested against and help decide what the system should generate and what must stay in human hands.
          </p>
          <p style={prose}>
            You also design for change. With your users, you map the changes your system will face and choose concepts so that most of them are configuration the owner can do alone, not code you have to write. For example, an instructor should be able to invent an entirely new grading scheme in plain language, built from Pawtograder's gradebook columns, column groups, topics, assignments, review rounds, rubrics, and expression language, and confirm it without an engineer. Some things your system must make impossible no matter what the model says, and you write it up the way a university AI ethics review would require.
          </p>
          <p style={prose}>
            Deliverables in weeks 4, 6, and 8 take your product from research to a working system. In week 9 you demo it.
          </p>

          <h3>Weeks 10–14: Break it, then make it better</h3>
          <p style={prose}>
            For the rest of the semester, two things happen at once. Teams test each other's systems adversarially, looking for ways to make them do what they shouldn't. And your stakeholders put your system to work, bring changes you haven't planned for, and tell you what isn't working, and you iterate on what they tell you. Deliverables continue every two weeks.
          </p>
        </div>

        {/* Assessment */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>Assessment (tentative)</h2>
          <p style={prose}>
            There are no points. Instead there are four bands, each a published list of things you have demonstrably done: <strong>Pass</strong> (trusted to build under review), <strong>Credit</strong> (trusted to exercise judgment), <strong>Distinction</strong> (trusted to own what ships), and <strong>High Distinction</strong> (trusted to extend the system). Each band requires the one below it. You declare the band you're aiming for, and at the end you make the case, with evidence, that you met it. Bands are individual, even for team work.
          </p>
          <p style={prose}>
            {/* TODO: final band requirements in the syllabus */}
            The evidence comes from:
          </p>
          <ul style={{ lineHeight: 1.8, color: 'var(--ifm-color-emphasis-800)' }}>
            <li><strong>Your individual tool:</strong> your own grading-policy tool, accepted or sent back by the product owner, and tested on cases you haven't seen.</li>
            <li><strong>The assurance manifest:</strong> kept current at every deliverable, with entries you own by name.</li>
            <li><strong>Code walks:</strong> throughout the semester a TA picks a decision you own, and you trace it from the manifest to the evidence to the code.</li>
            <li><strong>User research:</strong> requirements that trace back to real users, and acceptance examples they confirmed.</li>
            <li><strong>Adversarial testing:</strong> whether your system held up, and what you found in another team's.</li>
            <li><strong>Stakeholder feedback:</strong> how your system handled the changes your users brought, and what you changed in response.</li>
            <li><strong>Memos and the prediction:</strong> a memo with each deliverable backed by your measurements, and a dated prediction that next year's class will score.</li>
            <li><strong>Participation:</strong> you'll build with AI throughout this course, which makes the time we spend together in person matter more. Sessions are highly interactive, and each one includes a worksheet you complete in class. Come prepared, having done the reading. You can have up to two weeks of unexcused absences (four sessions) without it affecting your grade. Beyond that, your letter grade is capped, whatever band you reach. There is a procedure for excused absences such as illness or emergencies, but don't plan on it.</li>
            <li><strong>Worksheets are yours alone:</strong> you complete your own worksheet, in the room. If you turn in a worksheet for a classmate who isn't there, or ask someone to turn one in for you, both students receive an F for the course and are referred to the Office of Student Conduct and Conflict Resolution (OSCCR). OSCCR's sanctions can include losing eligibility for future co-ops.</li>
            <li><strong>Devices:</strong> for the same reason, no laptops, tablets, or phones in class unless you have an accommodation on file with Disability Access Services (DAS).</li>
          </ul>
        </div>

        {/* Logistics */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>Logistics</h2>
          <ul style={{ lineHeight: 1.8, color: 'var(--ifm-color-emphasis-800)' }}>
            <li><strong>Prerequisites:</strong> CS 3000, CS 3100, CS 3500, or DS 3500. This is a programming-intensive course, and you should already be proficient at programming and testing software that doesn't use LLMs. We'll work mostly in TypeScript, but you don't need prior TypeScript experience.</li>
            <li><strong>Compute:</strong> no GPUs needed. You'll call models through Claude Code on your Northeastern account, and team deployments run on the course cluster.</li>
            <li><strong>AI use:</strong> required. You'll build with coding agents throughout the course, and part of the work is reviewing what they write and answering for it.</li>
            <li><strong>Not covered:</strong> training or fine-tuning models. We'll discuss when fine-tuning pays off, but you won't do it.</li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}
