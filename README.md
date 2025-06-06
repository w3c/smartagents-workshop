
# Smart Voice Agents Workshop
Repository for the Web pages for the upcoming Smart Voice Agents Workshop, e.g., the Call-for-Participation

## General background
* Even simpler applications with speech capability are getting more and more popular for ease of user interaction and richer user experience. Some of them are already available in our homes.
* Voice agents are one of the essential applications on various devices, especially mobile phones, tablet devices, eBook readers, and gaming platforms. Moreover, the integration of speech capabilities into traditional platforms such as TVs, audio systems, and automobiles was a recent major technical advancement.
* The role of smart speakers as a portal for IoT services, including smart homes, tends to be overshadowed by the broader capabilities of LLMs.
* During [one of the breakout sessions at TPAC 2019 in Fukuoka](https://www.w3.org/2019/09/18-voice-minutes.html), there was a discussion about potential needs for improved voice agents for web services.
* This resulted in the creation of [Issue 221 Proposal: Workshop on User-friendly Smart Voice Agents on the Web - Voice interaction and what's next?](https://github.com/w3c/strategy/issues/221)

## Focus
* Firstly, see the current status of the voice-enabled smart platforms integrating multi-vendor services/applications/devices:
    * Voice interaction with smart devices also in the Web of Things
    * Control from Web browsers
    * Interoperability and access to controls for accessibility/usability, e.g., smart cities
* Discuss the current situation in voice interaction technology for global deployment across all languages, including the integration of large language models (LLMs) to enhance natural language understanding and generation.
* As a result we would see and discuss the pain points and technological gaps

## Possible topics
The following list of possible topics is quite broad as a starting point and will actually be reduced depending on the interests of participants.

* Clarification of use cases of smart voice agents and their requirements
* Summary of the current status:
    * Overview of existing browser support and platforms, for example smart speakers and mobile phones
    * Integration of LLMs for voice interaction to enhance browser capabilities and platforms
    * Common interoperability issues for smart voice agents among browsers and platforms
    * APIs in the presence of LLMs
* Needs of the users and developers of smart voice agents:
    * User interfaces to smart voice agents, including accessibility issues raised by smart voice agent technology
    * Enhanced voice interaction with LLMs in the context of smart voice agents for improved usability, addressing issues such as:
        * Hallucinations: LLMs may generate outputs that seem plausible but are factually incorrect.
        * Ambiguity in outputs: Inconsistent or vague responses can cause confusion in automated workflows.
        * Lack of accountability: Identifying the root cause of errors in an LLM’s predictions can be challenging.
    * Managing input entities (sensors/applications) and output entities (actuators/devices/digital twins) from various vendors and their coordination.
    * Addressing presentation issues such as how, what, and when to transfer necessary information from input entities (users, devices, or applications) to output entities (users, devices, or applications).
    * Integrating multiple interchangeable modalities (typing, handwriting, voice, etc.).
* Underlying technologies of smart voice agents:
    * Advanced integration and orchestration of multiple voice agents, e.g., in support of Agentic AI
    * Voice agents, services, and devices from various vendors
    * Standardized data formats and protocols for data and control transfer
    * State transition management models and service lifecycles
    * Enhanced models and architectures for smart voice agent interaction and their relationship with Web technologies
    * Utilizing advanced voice technology for Web services, for example speech style, expression, feeling, and emotion.
* Horizontal platform considerations:
    * Discovery of resources
    * Trust, privacy and security, for example tools such as encryption
    * Accessibility and usability
    * Internationalization and compatibility with region-specific technologies

## Examples of related use cases
The related technology area is broad, including:

* Voice agents and chatbots in various environments like smart homes, smart factories, smart cars and smart cities
* Smart speakers and smartphones as portals/user devices

For example, Hybrid TV services (Web+TV integration based on HTML5, Second Screen, TTML, etc.) and smart home devices and services, possibly incorporating proprietary technology like MiniApps, can offer the following use cases:

* Asking the voice agent on the TV in the living room to order takeaway, e.g., "I want to order a pizza."
* Using voice commands to choose the food and saying "checkout" to the smartwatch to process the payment.

Another example is searching for podcast or video content. The user can ask, "Play [topic of a podcast or video]," and the voice assistant will respond with, "Here's what I found," while displaying search results on the smartphone display. 
A useful user requirement may be the ability to request congruent user feedback (i.e., if voice is used for input, then speech is used for feedback).

> **NOTE:** The above is just a few examples of the possible use cases, and the development of use cases and their requirements will be one topic of the workshop.

## Who to attend?
* Many possible stakeholders including:
    * Service providers/System implementers
    * Government
    * Users and developers from various countries/communities
    * Standard organizations
    * Researchers from academia and industry

<!--
See also the [rendered HTML](https://w3c.github.io/smartagents-workshop/)
-->
