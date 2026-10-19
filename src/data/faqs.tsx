import type { ReactNode } from 'react'
import { PhoneLink } from '../components/PhoneLink'
import { EMAIL, EMAIL_HREF } from './site'

/*
 * Source of truth: Fast_Track_Deep_Blue_Interactive_FAQ.html (15 questions).
 * Question and answer wording is preserved from that file. Changes are limited to
 * markup: phone numbers and the email address are now links, and the
 * "Cell Phone Numbers: To be added" placeholder line in #15 is held back until
 * real numbers are supplied.
 */

export type FaqCategory = 'services' | 'medicaid' | 'ride' | 'about'

export const FAQ_CATEGORIES: { id: FaqCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All questions' },
  { id: 'services', label: 'Services & areas' },
  { id: 'medicaid', label: 'Medicaid & scheduling' },
  { id: 'ride', label: 'Your ride' },
  { id: 'about', label: 'About & contact' },
]

export type Faq = {
  n: number
  category: FaqCategory
  question: string
  answer: ReactNode
}

const Main = () => (
  <>
    <strong>Main Office:</strong> <PhoneLink phone="main" />
  </>
)
const Secondary = ({ label = 'Secondary:' }: { label?: string }) => (
  <>
    <strong>{label}</strong> <PhoneLink phone="secondary" />
  </>
)

export const FAQS: Faq[] = [
  {
    n: 1,
    category: 'services',
    question: 'What services does Fast Track Car Service provide?',
    answer: (
      <p>
        Fast Track Car Service provides non-emergency medical transportation (NEMT), helping patients travel to and
        from medical appointments safely, comfortably, and reliably. We understand how important dependable
        transportation is when it comes to your health. Our goal is to make every trip as convenient, comfortable, and
        stress-free as possible.
      </p>
    ),
  },
  {
    n: 2,
    category: 'services',
    question: 'What areas does Fast Track Car Service serve?',
    answer: (
      <p>
        Fast Track Car Service is based on Long Island, New York, and serves eligible clients throughout our approved
        service areas. Contact our office to confirm transportation availability in your location.
      </p>
    ),
  },
  {
    n: 3,
    category: 'services',
    question: 'Do you provide transportation to dialysis appointments?',
    answer: (
      <p>
        Yes! We help patients travel to and from regularly scheduled dialysis treatments. We understand the importance
        of consistent transportation for patients who depend on ongoing medical care. Our team works to provide
        dependable scheduling and a comfortable transportation experience.
      </p>
    ),
  },
  {
    n: 4,
    category: 'services',
    question: 'Do you provide transportation to doctors, hospitals, and specialists?',
    answer: (
      <p>
        Our transportation services may include primary care appointments, specialist visits, outpatient procedures,
        physical therapy, rehabilitation, and other eligible medical appointments.
      </p>
    ),
  },
  {
    n: 5,
    category: 'medicaid',
    question: 'Do you accept Medicaid transportation requests?',
    answer: (
      <p>
        Fast Track Car Service works with Medicaid transportation arrangements through Medical Answering Services
        (MAS), subject to eligibility, authorization, and assignment. Contact our office for assistance understanding
        the transportation process.
      </p>
    ),
  },
  {
    n: 6,
    category: 'medicaid',
    question: 'How do I request Fast Track Car Service as my transportation provider?',
    answer: (
      <p>
        When arranging an eligible Medicaid transportation trip through MAS, you can ask whether Fast Track Car
        Service can be assigned as your preferred transportation provider. Provider selection is subject to MAS
        requirements and availability. To request Fast Track Car Service, contact MAS at{' '}
        <strong>
          <PhoneLink phone="mas" />
        </strong>
        .
      </p>
    ),
  },
  {
    n: 7,
    category: 'ride',
    question: 'Can I request the same driver for my regular appointments?',
    answer: (
      <p>
        We understand that familiarity and consistency matter, especially for patients attending recurring
        appointments. We do our best to accommodate driver preferences when scheduling and availability permit.
      </p>
    ),
  },
  {
    n: 8,
    category: 'ride',
    question: 'What happens if my medical appointment runs late?',
    answer: (
      <>
        <p>
          If your appointment is delayed, please contact our office as soon as possible. We will work with you to
          coordinate your return transportation based on scheduling and trip authorization.
        </p>
        <p>
          <Main />
          <br />
          <Secondary />
        </p>
      </>
    ),
  },
  {
    n: 9,
    category: 'medicaid',
    question: 'Can I schedule recurring transportation for weekly medical appointments? What is a standing order?',
    answer: (
      <>
        <p>
          <strong>Yes!</strong> Many patients need regular rides for dialysis, physical therapy, rehabilitation, or
          other ongoing treatment. A <strong>standing order</strong> is a recurring transportation arrangement for
          appointments on a consistent schedule, such as Monday, Wednesday, and Friday.
        </p>
        <p>
          <strong>Benefits of a standing order:</strong>
        </p>
        <ul>
          <li>
            <strong>Convenient Scheduling:</strong> Once approved and established, recurring rides can be scheduled in
            advance without arranging each trip separately.
          </li>
          <li>
            <strong>Consistent Transportation:</strong> A regular schedule helps dispatch coordinate drivers and
            routes.
          </li>
          <li>
            <strong>Less Stress:</strong> Patients and caregivers can focus on medical care.
          </li>
          <li>
            <strong>Better Planning:</strong> Advance notice helps reduce last-minute difficulties.
          </li>
          <li>
            <strong>Peace of Mind:</strong> Recurring arrangements provide greater confidence.
          </li>
        </ul>
        <p>
          <strong>How do I set one up?</strong> Contact MAS at{' '}
          <strong>
            <PhoneLink phone="mas" />
          </strong>{' '}
          and ask about a standing order. You may request Fast Track as your preferred provider, subject to MAS
          approval, assignment, and availability.
        </p>
        <p>
          <strong>At Fast Track Car Service, we believe transportation should be one less thing to worry about.</strong>
        </p>
        <p className="faq-note">
          <em>
            Standing orders depend on eligibility, approval, and scheduling requirements; they do not guarantee a
            specific driver or provider.
          </em>
        </p>
      </>
    ),
  },
  {
    n: 10,
    category: 'about',
    question: 'What makes Fast Track Car Service different from other transportation companies?',
    answer: (
      <>
        <p>
          We believe medical transportation is about much more than getting from one destination to another. It is
          about dependable, compassionate, personalized service and treating every passenger with dignity, respect,
          patience, and professionalism.
        </p>
        <p>
          <strong>
            After a long appointment, especially dialysis or other treatments, we understand that patients want to get
            home as quickly and comfortably as possible.
          </strong>
        </p>
        <p>
          That is why our team makes every reasonable effort to accommodate clients and arrange earlier return
          transportation whenever possible. If your appointment finishes early, contact our office. Depending on driver
          availability, scheduling, and transportation authorization, we will do our best to get you home sooner
          rather than making you wait unnecessarily.
        </p>
        <p>
          We value lasting relationships and strive to provide the personal attention, flexibility, and care our
          clients deserve.
        </p>
        <p>
          <strong>At Fast Track, you are more than just another ride.</strong>
        </p>
      </>
    ),
  },
  {
    n: 11,
    category: 'ride',
    question:
      'Can a family member or caregiver arrange transportation for a patient, add additional passengers, or request special accommodations?',
    answer: (
      <>
        <p>
          Yes. Families and caregivers can help coordinate transportation. For Medicaid rides, contact{' '}
          <strong>
            MAS at <PhoneLink phone="mas" />
          </strong>{' '}
          to arrange transportation and request additional passengers or accommodations. Once arranged, contact Fast
          Track to:
        </p>
        <ul>
          <li>
            <strong>Confirm your ride:</strong> Check that the request was received and assigned to Fast Track.
          </li>
          <li>
            <strong>Verify additional passengers:</strong> Confirm that approved caregivers or family members were
            included.
          </li>
          <li>
            <strong>Discuss wheelchairs and walkers:</strong> We operate standard sedans, including Hyundai Sonatas and
            Elantras, <strong>not wheelchair-accessible vehicles</strong>. We cannot transport a passenger while seated
            in a wheelchair. If the passenger can safely transfer to a regular seat, we may be able to carry a folding
            wheelchair or walker that fits securely in the trunk; please confirm with us in advance.
          </li>
          <li>
            <strong>Car seats and booster seats:</strong> Notify MAS and Fast Track in advance. Confirm who will provide
            and properly install an age- and size-appropriate restraint as required by New York law.
          </li>
          <li>
            <strong>Special transportation needs:</strong> Tell us about mobility limitations, assistance needs, and
            pickup instructions.
          </li>
          <li>
            <strong>Pickup information:</strong> Verify the pickup location, time, and instructions.
          </li>
        </ul>
        <p className="faq-important">
          <strong>Important:</strong> Additional passengers and special arrangements must be authorized through MAS
          when required. Patients who must remain seated in a wheelchair should request wheelchair-accessible
          transportation through MAS.
        </p>
        <p>We strive to accommodate individual needs while keeping safety and comfort our top priorities.</p>
        <p>
          <Main /> | <Secondary />
        </p>
      </>
    ),
  },
  {
    n: 12,
    category: 'ride',
    question: 'What should I do if I need to cancel my ride, and why is it important to avoid no-shows?',
    answer: (
      <>
        <p>
          We understand plans can change.{' '}
          <strong>
            We kindly request at least four (4) hours’ advance notice for cancellations whenever possible.
          </strong>
        </p>
        <p>
          <strong>Why does it matter?</strong>
        </p>
        <ul>
          <li>
            <strong>Drivers’ time:</strong> An unnecessary dispatch uses time and resources.
          </li>
          <li>
            <strong>Other patients:</strong> Advance notice may let us accommodate another patient.
          </li>
          <li>
            <strong>No-shows:</strong> If a patient is unavailable at pickup without notifying us, the trip may be
            documented as a no-show under applicable procedures.
          </li>
          <li>
            <strong>Unpaid trips:</strong> Providers generally do not receive payment for uncompleted trips, including
            no-shows.
          </li>
          <li>
            <strong>Reliable scheduling:</strong> Your cooperation helps us serve everyone.
          </li>
        </ul>
        <p>
          <strong>Less than four hours’ notice?</strong> Call immediately. A late cancellation is better than having a
          driver arrive for an unnecessary trip. A late cancellation does not automatically mean a no-show.
        </p>
        <p>
          Notify MAS when required to update or cancel your authorized trip,{' '}
          <strong>and contact Fast Track directly</strong> so our dispatch team can notify the driver.
        </p>
        <p>
          <Main /> | <Secondary /> | <strong>MAS:</strong> <PhoneLink phone="mas" />
        </p>
        <p>
          <strong>A small courtesy makes a big difference. Thank you for helping us serve everyone better.</strong>
        </p>
      </>
    ),
  },
  {
    n: 13,
    category: 'medicaid',
    question: 'How far in advance should I schedule my medical transportation? What if I need an urgent appointment?',
    answer: (
      <>
        <p>
          <strong>Regular appointments:</strong> Patients should contact MAS <strong>at least three (3) days ahead</strong>{' '}
          to arrange transportation. Advance scheduling helps MAS process requests and helps our dispatch team plan
          routes and drivers.
        </p>
        <p>
          <strong>Urgent or last-minute appointments:</strong> If an unexpected medically necessary appointment cannot
          be scheduled three days ahead, <strong>contact MAS and Fast Track as soon as possible.</strong>
        </p>
        <ul>
          <li>
            <strong>MAS:</strong> Explain the urgency and request transportation authorization.
          </li>
          <li>
            <strong>Fast Track:</strong> Share the appointment date, time, pickup location, and transportation needs.
          </li>
          <li>
            <strong>Availability:</strong> We will check whether the trip fits into our schedule.
          </li>
          <li>
            <strong>Confirmation:</strong> Service depends on MAS authorization, driver availability, and safe
            accommodation.
          </li>
        </ul>
        <p>
          We will make every reasonable effort to accommodate urgent requests, but cannot guarantee a last-minute ride.
        </p>
        <p>
          <Main /> | <Secondary /> | <strong>MAS:</strong> <PhoneLink phone="mas" />
        </p>
        <p className="faq-important">
          <em>
            For life-threatening medical emergencies, call <a href="tel:911">911</a>. Fast Track is not an ambulance
            service. Confirm MAS advance-notice rules and exceptions before relying on the three-day guidance.
          </em>
        </p>
      </>
    ),
  },
  {
    n: 14,
    category: 'services',
    question: 'Do you work with nursing homes, rehabilitation centers, and medical facilities?',
    answer: (
      <p>
        Medical offices, healthcare coordinators, rehabilitation facilities, and other organizations are welcome to
        contact us to discuss their transportation needs and available service arrangements.
      </p>
    ),
  },
  {
    n: 15,
    category: 'about',
    question: 'How can I contact Fast Track Car Service?',
    answer: (
      <>
        <p>Our team can answer questions about transportation services, scheduling, standing orders, and availability.</p>
        <p>
          <Main />
          <br />
          <Secondary label="Secondary Number:" />
          <br />
          <strong>Email:</strong> <a href={EMAIL_HREF}>{EMAIL}</a>
          <br />
          <strong>MAS Scheduling:</strong> <PhoneLink phone="mas" />
        </p>
      </>
    ),
  },
]
