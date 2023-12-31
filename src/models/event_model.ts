import User from "./user";

/**
 * Represents a LakshyaEvent, which is an event with various properties.

*/
/**
 * Represents a LakshyaEvent, which is an event with various properties.
  
```typescript
const randomLakshyaEvent = {
    id:"5c4130c6-b9fb-4e4e-a618-5d72e988917f",
    created_at: new Date().toISOString(),
    name: 'Random Event',
    description: 'This is a random LakshyaEvent description.',
    datetime: new Date().toISOString(),
    amount:50,
    picture: 'https://example.com/random-image.jpg',
    coordinator:new User(
      {
        id: '561641a8-a2d0-45de-8545-55b8d96ddaa5',
        created_at: new Date().toISOString(),
        phone_number: '+1234567890',
        email_id: 'coordinator@example.com',
        sem: 3,
        avatar_url: 'https://example.com/coordinator-avatar.jpg',
        name: 'John Doe',
      }
    ),
    co_cordinator:new User(
      {
        id: '561641a8-a2d0-45de-8545-55b8d96ddaa5',
        created_at: new Date().toISOString(),
        phone_number: '+1234567890',
        email_id: 'coordinator@example.com',
        sem: 3,
        avatar_url: 'https://example.com/coordinator-avatar.jpg',
        name: 'John Doe',
      }
    ),
    rsvp_handler:new User(
      {
        id: '561641a8-a2d0-45de-8545-55b8d96ddaa5',
        created_at: new Date().toISOString(),
        phone_number: '+1234567890',
        email_id: 'coordinator@example.com',
        sem: 3,
        avatar_url: 'https://example.com/coordinator-avatar.jpg',
        name: 'John Doe',
      }
    ),
    support: {
      contact:["+91XXXXXXXXX"]
    }, // You can customize this property as needed
  };
```
**/

class LakshyaEvent {
  /**
   * Unique identifier for the event.
   */
  id: string;

  /**
   * The timestamp when the event was created.
   */
  created_at: string;

  /**
   * The name of the event (nullable).
   */
  name: string | null;

  /**
   * A description of the event (nullable).
   */
  description: string | null;

  /**
   * The date and time of the event (nullable).
   */
  datetime: string | null;

  /**
   * A URL pointing to an event picture (nullable).
   */
  picture: string | null;

  /**
   * The coordinator of the event (a User instance, nullable).
   */
  coordinator: User | null;

  /**
   * The co-coordinator of the event (a User instance, nullable).
   */
  co_cordinator: User | null;

  /**
   * An object representing support for the event (nullable).
   */
  support: object | null;

  /**
   * The RSVP handler for the event (a User instance, nullable).
   */
  rsvp_handler: User | null;

  /**
   * The amount associated with the event (nullable).
   * Represents the monetary value related to the event.
   */
  amount: number | null;

  /**
   * Constructs a new LakshyaEvent instance.
   *
   * @param props - An object containing the properties of the LakshyaEvent.
   */
  constructor(props: LakshyaEventInterface) {
    this.id = props.id;
    this.created_at = props.created_at;
    this.name = props.name;
    this.description = props.description;
    this.datetime = props.datetime;
    this.picture = props.picture;
    this.rsvp_handler = props.rsvp_handler;
    this.support = props.support;
    this.coordinator = props.coordinator;
    this.co_cordinator = props.co_cordinator;
    this.amount = props.amount;
  }

  /**
   * Converts a JSON object to a LakshyaEvent instance.
   *
   * @param json - The JSON representation of the LakshyaEvent.
   * @returns A new LakshyaEvent instance.
   */
  static fromJSON(json: any): LakshyaEvent {
    return new LakshyaEvent({
      id: json.id,
      created_at: json.created_at,
      name: json.name,
      description: json.description,
      datetime: json.datetime,
      picture: json.picture,
      rsvp_handler: json.rsvp_handler ? User.fromJSON(json.rsvp_handler) : null,
      support: json.support,
      coordinator: json.coordinator ? User.fromJSON(json.coordinator) : null,
      co_cordinator: json.co_cordinator
        ? User.fromJSON(json.co_cordinator)
        : null,
      amount: json.amount,
    });
  }

  /**
   * Converts a LakshyaEvent instance to a JSON object.
   *
   * @returns A JSON representation of the LakshyaEvent.
   */
  toJSON(): any {
    return {
      id: this.id,
      created_at: this.created_at,
      name: this.name,
      description: this.description,
      datetime: this.datetime,
      picture: this.picture,
      rsvp_handler: this.rsvp_handler ? this.rsvp_handler.toJSON() : null,
      support: this.support,
      coordinator: this.coordinator ? this.coordinator.toJSON() : null,
      co_cordinator: this.co_cordinator ? this.co_cordinator.toJSON() : null,
      amount: this.amount,
    };
  }
}

/**
  Interface representing the expected properties of a LakshyaEvent.
 */
export interface LakshyaEventInterface {
  /**
   * A unique identifier for the event.
   */
  id: string;

  /**
   * The date and time when the event was created, represented as a string.
   */
  created_at: string;

  /**
   * The name of the event, which can be either a valid string or `null` if not provided.
   */
  name: string | null;

  /**
   * A description of the event, which can be either a valid string or `null` if not provided.
   */
  description: string | null;

  /**
   * The date and time of the event, represented as a string or `null` if not specified.
   */
  datetime: string | null;

  /**
   * The URL to a picture associated with the event, which can be either a valid string or `null` if not provided.
   */
  picture: string | null;

  /**
   * The coordinator of the event, which can be either a valid User object or `null` if not specified.
   */
  coordinator: User | null;

  /**
   * The co-coordinator of the event, which can be either a valid User object or `null` if not specified.
   */
  co_cordinator: User | null;

  /**
   * Additional support information for the event, represented as an object or `null` if not provided.
   */
  support: object | null;

  /**
   * The RSVP handler for the event, which can be either a valid User object or `null` if not specified.
   */
  rsvp_handler: User | null;

  /**
   * The amount associated with the event, representing the monetary value. It can be either a valid number or `null` if not specified.
   */
  amount: number | null;
}

export default LakshyaEvent;
