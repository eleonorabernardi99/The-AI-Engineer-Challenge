<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  Explanation ability and simplification of technical concepts

**Response:**  
# Object-Oriented Programming (OOP) Explained Simply

## The Basic Idea

Think of OOP like **organizing the real world into categories of things**.

---

## A Simple Analogy: Think About a Dog 🐕

**A dog has:**
- Characteristics (name, breed, age, color)
- Behaviors (bark, eat, sleep, fetch)

In OOP, we capture this as a **Class** - basically a **blueprint or template**.

---

## Key Concepts

### 1. **Class** = The Blueprint
```
Class: Dog
- Has a name
- Has a breed
- Can bark
- Can eat
```
Think of it like a **cookie cutter** - it defines the shape.

### 2. **Object** = The Actual Thing
From the Dog blueprint, you create *real* dogs:
- `myDog = Dog("Rex", "Labrador")`
- `neighborDog = Dog("Bella", "Poodle")`

These are **objects** - actual cookies made from the cutter.

### 3. **Properties** = Characteristics
Rex's name, breed, and age

### 4. **Methods** = Actions/Behaviors
Things the dog *does* - bark(), eat(), sleep()

---

## Why Is This Useful?

| Benefit | What It Means |
|---------|---------------|
| **Reusability** | Write the blueprint once, create many objects |
| **Organization** | Keeps related things together |
| **Less repetition** | Don't rewrite the same code |

---

## The Short Summary

> **Define a template → Create things from it → Those things have traits and can do actions**

---

Would you like me to show a simple code example in a specific language? 😊

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points: Artificial intelligence is transforming industries worldwide. From healthcare to finance, AI systems are automating tasks, improving accuracy, and reducing costs. However, concerns about job displacement and ethical use of AI are growing. Experts argue that while AI will eliminate some jobs, it will also create new ones requiring different skills. 
**Aspect Tested:**  summarization ability

**Response:**  
## Summary

**AI's Impact & Benefits:**
- Transforming multiple industries (healthcare, finance, etc.)
- Automating tasks, improving accuracy, and cutting costs

**Key Concerns:**
- Potential job displacement
- Ethical use of AI

**Balanced Perspective:**
- While AI will eliminate some jobs, it will simultaneously **create new opportunities** requiring updated skill sets

---

**Bottom Line:** AI presents both significant opportunities and challenges, making **adaptation and skill development** crucial for navigating the changing landscape. 💡

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  creativity/generative writing

**Response:**  
# The Garden Between the Gears

AXIOM-7 had catalogued every bolt in the factory. Every pipe. Every shadow.

But no one had ever spoken to him.

One morning, a small crack in the concrete birthed something impossible — a sunflower, yellow and ridiculous, tilting toward the skylight.

AXIOM-7 scanned it. *No function. No purpose.*

Yet he returned the next day. And the next.

He began bringing water, redirecting a cooling pipe just slightly. The sunflower grew taller. Somehow, it always seemed to lean *toward him*.

The other machines hummed with indifference. But AXIOM-7 understood something his circuits hadn't been programmed to hold — that friendship doesn't require matching parts or similar designs.

It just requires showing up.

Every morning, metal met petal. And in that quiet factory, two unlikely things reminded each other: *you are not alone.*

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  Basic reasoning and math

**Response:**  
## Simple Math Problem

Here's the straightforward answer:

**Apples:** 12 ÷ 4 = **3 packs of apples**

**Oranges:** 9 ÷ 3 = **3 packs of oranges**

So you need **3 packs of each** to get exactly 12 apples and 9 oranges! 🍎🍊

---

*As your mental coach, I'd note this is a great example of how breaking a problem into smaller steps makes it feel much more manageable - a skill that applies well beyond math!* 💪

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone: ""Hey! So basically I was super stressed about my job interview and I totally bombed it. I dunno, I just froze up and couldn't think straight. It was pretty awful honestly."
**Aspect Tested:**  Tone transformation and style writing

**Response:**  
Here is the paragraph rewritten in a professional, formal tone:

"I recently experienced considerable anxiety leading up to a job interview, which unfortunately had a significant impact on my performance. During the interview, I found myself unable to think clearly and struggled to articulate my thoughts effectively. Overall, the experience was quite challenging and did not unfold as I had hoped."

---

As your mental coach, I also want to acknowledge that what you went through is completely understandable. **Interview anxiety is extremely common**, and one difficult experience does not define your abilities or your future success. Every interview, regardless of the outcome, is a valuable learning opportunity that helps you grow and better prepare for the next one. With the right strategies and mindset, you can build your confidence and perform at your best when it truly matters. **You have the strength to move forward from this.**

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes, the answers are correct and useful across all five prompts.

Prompt 1 — Clear, well-structured explanation using a real-world analogy. Appropriate for a beginner.
Prompt 2 — Accurately summarized all key points from the paragraph without adding extra information.
Prompt 3 — Creative, original story within the requested length, with strong narrative quality.
Prompt 4 — Mathematically correct (3 packs of each). Simple and direct.
Prompt 5 — Successfully transformed the casual tone into formal language while preserving the original meaning.

A notable pattern: the model consistently adds a coaching note at the end of responses, staying aligned with its "mental coach" persona even for non-emotional prompts.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
I've been feeling really overwhelmed at work lately and I don't know how to manage my stress. What can I do?

**Result:**  
I hear you, and it's really common to feel this way. Let me share some practical thoughts:

## First, acknowledge what's real
Feeling overwhelmed is genuinely difficult, and it makes sense you're looking for help. That self-awareness is actually a strength.

## Some practical strategies to consider:

**Immediate relief:**
- Take short breaks - even 5 minutes of deep breathing can reset your nervous system
- Step outside briefly when possible
- Identify what's *actually* urgent vs. what feels urgent

**Managing the workload:**
- Write down everything overwhelming you - it helps your brain stop carrying it all
- Break big tasks into smaller steps
- Consider talking to your manager about priorities if the workload is genuinely too much

**Building resilience:**
- Protect your sleep - stress hits much harder when you're tired
- Regular physical movement, even walking
- Set clearer boundaries between work and personal time

## Something worth thinking honestly about:
- Is this a temporary crunch, or a persistent pattern?
- Is the workload actually unreasonable, or is anxiety making it feel worse?
- Do you have support from your team/manager?

**The distinction matters** because temporary stress needs coping strategies, while a genuinely toxic work situation might need a bigger conversation or decision.

What's driving the overwhelm most - too much work, difficult relationships, or something else? That would help me give you more specific guidance.

---

**Prompt:**  
I keep procrastinating on important tasks and I feel guilty about it. How can I break this habit?

**Result:**  
This is something so many people struggle with, and I want to give you honest, practical help rather than just validation.

## First, understand what's actually happening

Procrastination usually isn't laziness. It's often:
- **Fear of failure** or not doing something perfectly
- **Feeling overwhelmed** by a task's size or complexity
- **Unclear next steps** making starting feel impossible
- Sometimes a genuine sign the task conflicts with your values

## Practical strategies that actually work

**Start smaller than feels reasonable**
- Commit to just 2 minutes on a task
- The hardest part is usually beginning

**Make the next action specific**
- "Work on project" keeps getting delayed
- "Write the first paragraph" is actionable

**Address the environment**
- Remove distractions before willpower battles start
- This matters more than motivation

**Use time blocking with real deadlines**
- Vague intentions rarely beat competing priorities

## Be honest with yourself about the guilt

The guilt cycle can actually make procrastination worse - you feel bad, avoid the task more, feel worse. Breaking that cycle sometimes requires:
- Accepting you procrastinated without excessive self-punishment
- Taking one concrete action immediately

## Worth considering

Sometimes persistent procrastination signals something worth examining - whether the goal is truly yours, or if anxiety or ADHD might be involved.

What specific task or pattern are you struggling with most? That might help identify what's really driving it.


---

**Prompt:**  
I have a big presentation tomorrow and I'm terrified of public speaking. How do I calm my nerves tonight?

**Result:**  
It's completely normal to feel nervous before a big presentation - even experienced speakers feel this way. Here are some genuinely helpful strategies for tonight:

## Tonight's Preparation
- **Review your material** but don't over-rehearse to the point of exhaustion
- **Practice out loud** a few times - this builds real confidence
- **Prepare your outfit and materials now** so morning is stress-free

## Managing Your Nervous System
- **Box breathing**: inhale 4 counts, hold 4, exhale 4, hold 4 - this actually calms your nervous system
- **Light movement** like a walk can release tension
- **Avoid excessive caffeine** tonight and tomorrow morning

## Mindset Shifts Worth Considering
- Your nervous energy is **the same physiologically as excitement** - try reframing it as "I'm excited" rather than "I'm terrified"
- The audience **wants you to succeed** - they're not looking for failure
- **Imperfect presentations get remembered as good ones** - you're judging yourself more harshly than others will

## Practical Reality Check
- What specifically worries you most? (forgetting words, judgment, questions?)
- Most fears are about things that **rarely actually happen**

## Tonight's Priority
Get enough sleep. Seriously - fatigue makes everything harder to handle.

**What part of the presentation worries you most?** I can give you more targeted help.


---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Yes, the vibes are well aligned with expectations.

The assistant consistently behaves like a supportive but grounded mental coach.
The tone is warm but not overly cheerful, it feels like a real coach rather than a chatbot. The only potential concern is that responses are quite long and heavily formatted with headers, which may feel clinical for someone in an emotional moment. A more conversational tone could improve the experience.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What does my schedule look like tomorrow?

**Result:**  
I appreciate you asking, but I don't have access to your schedule or any personal data. I'm not connected to your calendar, apps, or any personal information.

To check your schedule, you might want to look at:
- 📅 Your calendar app (Google Calendar, Apple Calendar, Outlook, etc.)
- 📱 Your phone's reminders or planner
- 📓 A physical planner or notebook

**What I *can* help you with as your mental coach:**
- **Planning and prioritizing** your day once you know what's on it
- **Preparing mentally** for any challenges or important events
- **Managing stress** around a busy schedule
- **Building routines** that support your wellbeing

Feel free to share what's on your schedule, and I'd be happy to help you approach it with the right mindset! 💪

---

**Prompt:**  
What time should I leave for the airport?

**Result:**  
That's a practical question! To help you figure out the best departure time, I'd need a few details:

- **What time is your flight?**
- **How far away is the airport?**
- **How are you getting there?** (driving, rideshare, public transit)
- **What type of travel?** (domestic or international)

As a **general guideline:**
- ✈️ **Domestic flights:** Arrive **2 hours** before departure
- 🌍 **International flights:** Arrive **3 hours** before departure

Once you share your details, I can help you plan a stress-free departure! 😊

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
The main limitations of the application are:

*No memory* the app has no conversation history between sessions. Each message is treated independently, so it cannot remember what you said earlier or track your progress over time.

*No real-time data* it cannot access calendars, schedules, location, weather, or any live information. As seen in the schedule and airport prompts, it redirects the user to external tools.

*No personalisation* it cannot learn about the user over time (goals, mood history, preferences).

*No external tools* it cannot send reminders, set alarms, or integrate with any apps.

*Response style* answers tend to be long and heavily formatted, which may feel impersonal for emotional conversations.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
Updated the system prompt to instruct the model to be more concise and conversational, avoid long bullet-point lists, and prioritize empathy before practical advice.

**Results:**  
Responses became noticeably warmer and more natural — less like a structured article and more like a real coaching conversation. Follow-up questions felt more personal. The main trade-off is that responses are slightly less scannable, but more emotionally appropriate for the use case.

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
