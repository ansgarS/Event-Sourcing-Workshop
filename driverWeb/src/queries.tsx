// Generated in 2019-05-08T10:18:46+02:00
/* tslint:disable */
export type Maybe<T> = T | null;

export interface CoordinatePairInput {
  latitude: number;

  longitude: number;
}

export interface RefreshSignInInput {
  refreshToken: string;
}

export interface SignUpAsPassengerInput {
  firstName: string;

  lastName: string;

  email: string;

  password?: Maybe<string>;

  locale: string;

  code: string;
}

export interface VerifyPassengerEmailInput {
  email: string;

  locale: string;
}

export interface SignInInput {
  username: string;

  password: string;

  role?: Maybe<Role>;
}

export interface VerifyPassengerInput {
  username: string;
}

export interface SignInWithTokenInput {
  username: string;

  token: string;
}

export interface ReserveTripInput {
  driverTripId: string;

  pickupWaypointId: string;

  dropoffWaypointId: string;

  seats?: Maybe<number>;
}

export interface CancelReservationInput {
  id: string;
}

export interface CheckInAtWaypointInput {
  time: DateTime;

  driverTripId: string;

  waypointId: string;

  pickedUpPassengerIds: string[];
}

export interface CheckInReservationInput {
  id: string;
}

export interface RequestTokenInput {
  username: string;

  locale: string;
}

export enum ReservationStatus {
  Active = "ACTIVE",
  CanceledByPassenger = "CANCELED_BY_PASSENGER",
  CanceledByOperator = "CANCELED_BY_OPERATOR"
}

export enum TripStatus {
  Active = "ACTIVE",
  Canceled = "CANCELED"
}

export enum Role {
  Passenger = "PASSENGER",
  Driver = "DRIVER",
  None = "NONE"
}

/** DateTime represented as an ISO8601 string */
export type DateTime = any;

export type Polyline = any;

/** Duration in Seconds represented as an Integer */
export type Seconds = any;

// ====================================================
// Documents
// ====================================================

export type SignupAsPassengerVariables = {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  locale: string;
  code: string;
};

export type SignupAsPassengerMutation = {
  __typename?: "Mutation";

  signUpAsPassenger: SignupAsPassengerSignUpAsPassenger;
};

export type SignupAsPassengerSignUpAsPassenger = {
  __typename?: "SignUpAsPassengerPayload";

  passenger: SignupAsPassengerPassenger;
};

export type SignupAsPassengerPassenger = {
  __typename?: "Passenger";

  id: string;

  name: string;
};

export type VerifyPassengerEmailVariables = {
  email: string;
  locale: string;
};

export type VerifyPassengerEmailMutation = {
  __typename?: "Mutation";

  verifyPassengerEmail: Maybe<boolean>;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";
import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const SignupAsPassengerDocument = gql`
  mutation signupAsPassenger(
    $lastName: String!
    $firstName: String!
    $email: String!
    $password: String!
    $locale: String!
    $code: String!
  ) {
    signUpAsPassenger(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        locale: $locale
        code: $code
      }
    ) {
      passenger {
        id
        name
      }
    }
  }
`;
export class SignupAsPassengerComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      SignupAsPassengerMutation,
      SignupAsPassengerVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        SignupAsPassengerMutation,
        SignupAsPassengerVariables
      >
        mutation={SignupAsPassengerDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SignupAsPassengerProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<SignupAsPassengerMutation, SignupAsPassengerVariables>
> &
  TChildProps;
export type SignupAsPassengerMutationFn = ReactApollo.MutationFn<
  SignupAsPassengerMutation,
  SignupAsPassengerVariables
>;
export function SignupAsPassengerHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SignupAsPassengerMutation,
        SignupAsPassengerVariables,
        SignupAsPassengerProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    SignupAsPassengerMutation,
    SignupAsPassengerVariables,
    SignupAsPassengerProps<TChildProps>
  >(SignupAsPassengerDocument, operationOptions);
}
export const VerifyPassengerEmailDocument = gql`
  mutation verifyPassengerEmail($email: String!, $locale: String!) {
    verifyPassengerEmail(input: { email: $email, locale: $locale })
  }
`;
export class VerifyPassengerEmailComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      VerifyPassengerEmailMutation,
      VerifyPassengerEmailVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        VerifyPassengerEmailMutation,
        VerifyPassengerEmailVariables
      >
        mutation={VerifyPassengerEmailDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type VerifyPassengerEmailProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    VerifyPassengerEmailMutation,
    VerifyPassengerEmailVariables
  >
> &
  TChildProps;
export type VerifyPassengerEmailMutationFn = ReactApollo.MutationFn<
  VerifyPassengerEmailMutation,
  VerifyPassengerEmailVariables
>;
export function VerifyPassengerEmailHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        VerifyPassengerEmailMutation,
        VerifyPassengerEmailVariables,
        VerifyPassengerEmailProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    VerifyPassengerEmailMutation,
    VerifyPassengerEmailVariables,
    VerifyPassengerEmailProps<TChildProps>
  >(VerifyPassengerEmailDocument, operationOptions);
}
