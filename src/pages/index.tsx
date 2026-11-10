"use client";

// DRAFT landing page for CS 4130 Spring 2027. Drop into src/pages/index.tsx of the course Docusaurus shell
// (same layout as CS4535-Fall-2026). Items marked TODO need confirming before publishing.

import Layout from '@theme/Layout';

const prose = { lineHeight: 1.7, color: 'var(--ifm-color-emphasis-800)' };

export default function Home() {
  return (
    <Layout title="Welcome" description="CS 4130: Engineering LLM-Integrated Systems, Spring 2027">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Hero */}
        <div style={{ marginBottom: '3rem' }}>
          {/* TODO: banner, concept TBD */}
          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.25rem' }}>
            CS 4130: Engineering LLM-Integrated Systems
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
            Spring 2027 &middot; Prof. Jonathan Bell &middot; {/* TODO: meeting days, time, room */}TBA
          </p>

          <p style={prose}>
            Wiring an LLM into a product takes an afternoon. A model call, a prompt, a demo that works on the first try. Then the hard part starts. The output changes every time you run it. It's right most of the time, and you don't know which times it's wrong. It doesn't have your data. It follows instructions hidden in the documents you hand it. It costs money on every call. And six months from now a new model comes out that makes half of what you built unnecessary, while the other half matters more than ever.
          </p>

          <p style={prose}>
            This course is about that second part. You'll build a real LLM-integrated product as a team over the whole semester, measure it, attack it, run it under load, and decide what it should and shouldn't do. You'll leave knowing how to tell a demo from a system.
          </p>

          <p style={prose}>
            Two questions run through every week:
          </p>

          <ol style={{ fontSize: '0.95rem', color: 'var(--ifm-color-emphasis-700)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
            <li><strong>What survives the next model?</strong> Every model release absorbs some engineering. Which parts of your work keep their value as models get better, and which parts should you stop building and wait for?</li>
            <li><strong>Should this be built, and who is harmed when it's wrong?</strong> A better model lowers the error rate. It doesn't decide who is accountable for the errors that remain, what users need to be told, or whether a decision should be made by a model at all.</li>
          </ol>
        </div>

        {/* The ladder */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>How we answer the first question: the model ladder</h2>
          <p style={prose}>
            You'll run the same system on several Claude models, from a model released in 2025 up to the current most capable one. Today's top model stands in for next year's cheap one. For every technique you add, whether it's a prompt pattern, a retrieval step, a tool, or a check in code, you measure how much it improves the system on each model.
          </p>
          <p style={prose}>
            If that improvement shrinks as the models get better, the frontier is absorbing your technique. If it holds, you've found something worth owning. Each milestone ends with a short memo making that case with your own data. At the end of the semester you file a dated prediction about a technique the frontier will absorb within a year. Next year's class will score it.
          </p>
        </div>

        {/* The product */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>The product</h2>
          <p style={prose}>
            {/* TODO: name the product once chosen */}
            You'll work in an existing open-source codebase, not a blank repo, and your team adds an LLM-powered assistant to it. We'll announce the product before the semester starts. Whatever it is, it has the properties that make LLM systems hard: output that's partly checkable and partly a matter of judgment, private user data the model has never seen, untrusted content flowing in from outside, actions that affect other people, and errors that can cause real harm.
          </p>
        </div>

        {/* Structure */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>Course structure (preview)</h2>
          <p style={prose}>
            One product, four milestones, built in teams. {/* TODO: team size */}The details will change before January. The arc won't.
          </p>

          <h3>Milestone 1: Measure it, then make it cheaper</h3>
          <p style={prose}>
            Take a feature the frontier already does well, build an eval set with real ground truth, and measure it across the model ladder. Then cut its cost, comparing cheaper models, classic non-LLM baselines, and cascades that combine them. Then weigh whose data and whose work the feature depends on, and what it should refuse to do.
          </p>

          <h3>Milestone 2: A grounded assistant</h3>
          <p style={prose}>
            Build an assistant that works over each user's own data. Compare what the model knows on its own, what it can do with retrieval, and what it can do with retrieval plus deterministic code that checks its answers. Measure whether it works equally well for every group of users.
          </p>

          <h3>Milestone 3: Guarantees and red team</h3>
          <p style={prose}>
            Make some things impossible no matter what the model says: a safety violation, an unconfirmed change to data other people share. Defend against prompt injection in content that comes from outside. Then swap with another team and try to break theirs. Write up your system the way a university AI ethics review would require.
          </p>

          <h3>Milestone 4: Operate</h3>
          <p style={prose}>
            Run your system against simulated users while staff inject events, such as a model upgrade or an injection campaign. Stay within a cost budget, turn failures into regression tests, and decide whether you'd ship it.
          </p>

          <h3>Individual work</h3>
          <p style={prose}>
            {/* TODO: confirm HA assignment */}
            Alongside the team project, an individual assignment on smart-home agents: what guarantees an LLM-controlled home needs, and who it affects beyond the person giving the commands.
          </p>

          <h3>Reading the research</h3>
          <p style={prose}>
            Much of this field is only a few years old, and it changes every semester. We read and discuss current papers on evaluation, agents, and prompt injection, and every memo cites one paper whose technique your team tried.
          </p>
        </div>

        {/* What you'll learn */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>What you'll be able to do</h2>
          <ul style={{ lineHeight: 1.8, color: 'var(--ifm-color-emphasis-800)' }}>
            <li>Explain how an LLM produces output well enough to predict which failures the next model will fix and which it won't</li>
            <li>Define "correct" for fuzzy output, and build evals that hold up when the same input gives a different answer every run</li>
            <li>Connect a model to data and tools it can't otherwise reach, through retrieval and MCP</li>
            <li>Enforce safety and policy in code at the tool boundary, then attack your own defenses</li>
            <li>Track cost and latency, route between models, and qualify a model upgrade with your own evals</li>
            <li>Identify who a system affects, weigh the harms, and make the case for or against deploying it</li>
          </ul>
        </div>

        {/* Logistics */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>Logistics</h2>
          <ul style={{ lineHeight: 1.8, color: 'var(--ifm-color-emphasis-800)' }}>
            <li><strong>Prerequisites:</strong> {/* TODO: catalog prereqs */}TBA</li>
            <li><strong>Compute:</strong> no GPUs needed. You'll call models through Claude Code on your Northeastern account, and team deployments run on the course cluster.</li>
            <li><strong>AI use:</strong> {/* TODO: AI policy (open decision) */}to be announced with the syllabus.</li>
            <li><strong>Not covered:</strong> training or fine-tuning models. We'll discuss when fine-tuning pays off, but you won't do it.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: '3rem' }}>
          <h2>Common questions</h2>

          <h3>I took CS 4535. Is this more of the same?</h3>
          <p style={prose}>
            Some of the setup will feel familiar: an existing codebase, deployments on the cluster, staff-injected incidents. The content is different. 4535 is about engineering and operating a large system as a team. In 4130 the hard part is the model: defining correct for output that's never quite the same twice, figuring out why it failed, deciding what to fix in code and what to wait on, and deciding whether it should be making the decision at all.
          </p>

          <h3>Is this a machine learning course?</h3>
          <p style={prose}>
            No. You won't train models. You'll learn enough about how they're trained and how they generate text to reason about their behavior, and the rest of the semester is about the software around them.
          </p>

          <h3>How is this different from the Fall 2025 offering?</h3>
          <p style={prose}>
            Arjun Guha's 2025 version covered prompting, fine-tuning on GPUs, agents, and evals through a series of two-person projects. This version keeps the prompting, agent, and eval material, drops hands-on training, and replaces the separate projects with one product built over the semester.
          </p>
        </div>

      </div>
    </Layout>
  );
}
