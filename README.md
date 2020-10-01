# PHILIA(φιλία) HEALTHCARE [![Codacy Badge](https://app.codacy.com/project/badge/Grade/01efe88910f04681a0da5d02cce076c2)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Phil-Jayz/philia-webmin&amp;utm_campaign=Badge_Grade)

PHILIA (φιλία) is a social network that connects doctors and patients from all over the world, in order to help solve everyday health problems and build a healthier world.

## Problem Statement

Malaria kills a child every 30 seconds, and more than one million people die from it every year. It is important to note, however, that malaria and other diseases can be treated if diagnosed in a timely manner.
These deaths are the result of disparities in the social determinants of health. Patients in under-resourced regions such as sub-Saharan Africa and Southeast Asia often have little access to hospitals and microscopes for diagnosis, and even in regions with adequate medical facilities, many people lack the financial resources to take advantage of these facilities. 

## Inspiration

Coordination problems are the root cause of a lot of issues in society. Care coordination (**CC**) is an important fulcrum for pursuing a range of health care goals. Current research and policy analyses have focused on aggregated data rather than on understanding what happens within individual cases. At the case level,**CC** emerges as a complex network of communications among providers over time, crossing and recrossing many organizational boundaries. Micro-level analysis is needed to understand where and how **CC** fails, as well as to identify best practices and root causes of problems.

This refers to current medical practice: there is insufficient data, insufficient time, insufficient context, and insufficient presence (of doctor to patient).

We don’t have all the relevant data for each when they are seen. Patients don’t even have all their data, because it is spread across many different doctors and health systems and hard to get to. And the data from one hospital or clinic is in different formats from the next.

The average clinic visit in the United States lasts only 7 minutes for an established patient or 12 minutes for a new patient. During that very limited time, there is little eye-to-eye contact because the doctor is preoccupied entering data at a keyboard. In that minimal time with distraction, diagnostic errors are all too common—over 12 million serious diagnostic errors a year in the United States. If a doctor doesn’t think of the diagnosis quickly, in the first 5 minutes, the error rate is over 70%. Unnecessary lab tests and scans are ordered way too often, leading to vast waste, with the lack of time to adequately reflect about the patient’s story and data.

**Patients feel shortchanged that their doctors are not really present, not attentive, not listening, and have the sense they’re not really cared for.**

Reciprocally, doctors feel rushed, unable to execute their charge of caring for their patients which is why they entered the profession, and we are at peak levels of burnout and clinical depression. And burnout leads to a doubling of medical errors, which promotes burnout, a vicious cycle that has to be broken.

Some facts:

1.  Lack of medical care assistance , more serious diagnostic errors, depression, anxiety, insufficient data, insufficient time, insufficient context, insufficient presence and  (of doctor to patient) 

2.  [The study estimates that 5 million people die every year because of poor-quality health care in low- and middle-income countries. That's significantly more than the 3.6 million people in those countries who die from not having access to care.](https://www.npr.org/sections/goatsandsoda/2018/09/05/644928153/what-kills-5-million-people-a-year-its-not-just-disease)

3.  **the failure to  establish an accurate and timely explanation of the patient's health problem(s) or communicate that explanation to the patient** ...

#Human health care is important.

**Recommendation 1**: 

In recognition that the diagnostic process is a dynamic team-based activity, health care organizations should ensure that health care professionals have the appropriate knowledge, skills, resources, and support to engage in teamwork in the diagnostic process. To accomplish this, they should facilitate and support:

- Intra- and interprofessional teamwork in the diagnostic process.
- Collaboration among pathologists, radiologists, other diagnosticians, and treating health care professionals to improve diagnostic testing processes.
 
**Recommendation 2**: 

Health care professionals and organizations should partner with patients and their families as diagnostic team members and facilitate patient and family engagement in the diagnostic process, aligned with their needs, values, and preferences. To accomplish this, they should:

- Provide patients with opportunities to learn about the diagnostic process.
- Create environments in which patients and their families are comfortable engaging in the diagnostic process and sharing feedback and concerns about diagnostic errors and near misses.
- Ensure patient access to electronic health records (EHRs), including clinical notes and diagnostic testing results, to facilitate patient engagement in the diagnostic process and patient review of health records for accuracy.<br /> 
- Identify opportunities to include patients and their families in efforts to improve the diagnostic process by learning from diagnostic errors and near misses.

# What it does

**PHILIA** is an intelligent **personal medical assistant** capable of detecting behavioral tendencies and associated behavioral intents; in order to diagnose patients and help regulate the degree of frustrations or sadness by giving possible health issues and associated treatments or some advice.

A real assistant platform to track psychopathology patients' responses during voice-to-voice conversations and remote sessions.

This platform makes use of a machine learning algorithm capable of tracking and detecting facial expressions(sooner)   to identify associated emotions through a camera or voice expressions through conversations. This allows the corresponding medical staff or the platform by itself to take care of their patients by creating medical records supported by the artificially intelligent system, so they can follow-up the corresponding treatments.

# How I built it

Inspired by how [**FACEBOOK**](https://facebook.com) has changed how lives by getting people in touch
This project has been built with a lot of love, motivations to help others and empathy for died persons in lack of good health care, using:

- [wit.ai](https://wit.ai/) , Natural Language Experiences
- [alan](https://alan.app/) , Conversational voice AI
- [apmedic](https://apimedic.com/) , Symptom Checker API
- [React Native](https://reactnative.dev/) , mobile app version
- [React js](https://reactjs.org/) , web app version
- [GraphQL](https://graphql.org/) , query language for the back-end APIS
- [Express js](https://expressjs.com/), business logic back-end for basics functionalities APIS
- [Python Flask](https://expressjs.com/), business logic back-end for machine learning APIS
- [Amazon RDS for MariaDB](https://aws.amazon.com/rds/mariadb/), a real-time database
