
# smartagents-workshop
Repository for the Web pages for the upcoming Smart Agents Workshop, e.g., the Call-for-Participation

## General background
* Thanks to the advancement of HTML5 and related Web technologies, Web applications with speech capability are getting more and more popular for ease of user interaction and richer user experience, such as Apple's SIRI, Google's Voice Assistant, and Amazon's Alexa.
* Voice agents are one of the essential applications on various devices, especially mobile phones, tablet devices, eBook readers, and gaming platforms. Moreover, the integration of speech capabilities into traditional platforms such as TVs, audio systems, and automobiles was a recent major technical advancement.
* The role of smart speakers as a portal for IoT services, including smart homes, tends to be overshadowed by the broader capabilities of LLMs.
* During [one of the breakout sessions at TPAC 2019 in Fukuoka](https://www.w3.org/2019/09/18-voice-minutes.html), there was a discussion about potential needs for improved voice agents for web services.
* This resulted in the creation of [Issue 221 Proposal: Workshop on User-friendly Smart Agents on the Web - Voice interaction and what's next?](https://github.com/w3c/strategy/issues/221)

## Focus
* See the current status of the voice-enabled smart platforms integrating multi-vendor services/applications/devices:
    * Interaction with smart devices also in the Web of Things
    * Control from Web browsers
    * Interoperability and access to controls for accessibility/usability, e.g., smart cities
* Discuss the current situation in voice interaction technology for global deployment across all languages, including the integration of large language models (LLMs) to enhance natural language understanding and generation.
* As a result we would see the pain points and technological gaps

## Possible topics
* Clarification of use cases of smart agents and their requirements
* Summary of the current status:
    * Overview of existing browser support and platforms, for example smart speakers and mobile phones
    * Integration of LLMs to enhance browser capabilities and platforms
    * Common interoperability issues for smart agents among browsers and platforms
    * APIs in the presence of LLMs
* Needs of the users and developers:
    * Enhanced interaction with LLMs for improved usability, addressing issues such as:
        * Hallucinations: LLMs may generate outputs that seem plausible but are factually incorrect.
        * Ambiguity in outputs: Inconsistent or vague responses can cause confusion in automated workflows.
        * Lack of accountability: Identifying the root cause of errors in an LLM’s predictions can be challenging.
* Utilizing advanced voice technology for Web services, including speech style, expression, feeling, and emotion.
* Managing input entities (sensors/applications) and output entities (actuators/devices/digital twins) from various vendors and their coordination.
* Addressing presentation issues such as how, what, and when to transfer necessary information from input entities (users, devices, or applications) to output entities (users, devices, or applications).
* Integrating multiple interchangeable modalities (typing, handwriting, voice, etc.).
* Underlying technologies:
    * Advanced integration of multiple applications, e.g., via Agentic AI
    * Applications, services, and devices from various vendors
    * Standardized data formats and protocols for data transfer
    * State transition management models and service lifecycles
    * Enhanced models and architectures for voice interaction and their relationship with Web technologies
* Horizontal platform considerations:
    * Discovery of resources
    * Privacy and security
    * Accessibility and usability
    * Internationalization and compatibility with region-specific technologies

## Examples of related use cases
The related technology area is broad, including:

* Voice agents
* Connected cars
* Smart homes, smart factories, and smart cities
* Smart speakers and smartphones as portals/user devices

For example, Hybrid TV services (Web+TV integration based on HTML5, Second Screen, TTML, etc.) and smart home devices and services, possibly incorporating proprietary technology like MiniApps, can offer the following use cases:

* Asking the voice agent on the TV in the living room to order takeaway, e.g., "I want to order a pizza."
* Using voice commands to choose the food and saying "checkout" to the smartwatch to process the payment.

Another example is searching for television content. The user can ask, "Play [name of an episodic TV show]," and the voice assistant will respond with, "Here's what I found," while displaying search results on the TV. A useful user requirement may be the ability to request congruent user feedback (i.e., if voice is used for input, then speech is used for feedback).

> **NOTE:** The above is just a few examples of the possible use cases, and the development of use cases and their requirements will be one topic of the workshop.

## Who to attend?
* Many possible stakeholders including:
    * Service providers/System implementers
    * Govt (like Singapore)
    * Users from various countries/communities
* Liaisons
    * CHIP (Amazon, Apple, Google, and Zigbee)
    * OCF
    * oneM2M
    * Singapore Govtech

<!--
See also the [rendered HTML](https://w3c.github.io/smartagents-workshop/)
-->
