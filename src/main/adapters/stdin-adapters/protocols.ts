import { Controller } from '@/presentation/protocols';

export interface StdinAdapter<REQ, RES> {
  ignite (startMessage: string, controller: Controller<REQ, RES>): any
}