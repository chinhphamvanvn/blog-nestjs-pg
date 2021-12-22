import { SetMetadata } from "@nestjs/common";

export const hasRoles = (...hasRole: string[]) => SetMetadata('roles', hasRoles);