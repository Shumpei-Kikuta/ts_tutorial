export {};

// Partial -> 全ての属性を任意にする
// Required -> 全ての属性を必須にする
type Profile = {
  name: string;
  age?: number;
  zipcode: number;
};

type PartialType = Partial<Profile>;

type RequiredType = Required<Profile>;
