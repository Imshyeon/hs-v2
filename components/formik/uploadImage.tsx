// import { FunctionComponent } from "react";
// import { FormikErrors } from "formik";

// interface IUploadFile {
//   name: string;
//   data: { image?: File };
//   setFieldValue: (
//     field: string,
//     value: any,
//     shouldValidate?: boolean | undefined
//   ) => Promise<FormikErrors<{ image?: File }>> | Promise<void>;
//   errors: FormikErrors<{ image?: File }>;
// }

// const UploadFile: FunctionComponent<IUploadFile> = ({
//   name,
//   data,
//   setFieldValue,
//   errors,
// }) => {
//   return (
//     <div>
//       <input
//         type="file"
//         name={name}
//         // set supported file types here,
//         // could also check again within formik validation or backend
//         accept="image/png, .svg"
//         onChange={(e) => {
//           // Object is possibly null error w/o check
//           if (e.currentTarget.files) {
//             setFieldValue("image", e.currentTarget.files[0]);
//           }
//         }}
//       />
//       {errors.image && (
//         <>
//           <br />
//           <span id="error">{errors.image}</span>
//           <br />
//         </>
//       )}
//     </div>
//   );
// };

// export default UploadFile;
