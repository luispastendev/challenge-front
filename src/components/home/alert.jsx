import { CheckCircleIcon } from '@heroicons/react/solid'

export default function Alert({alert}) {
  return (
    <div className={`rounded-md bg-${alert.type}-100 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className={`h-5 w-5 text-${alert.type}-400`} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium text-${alert.type}-800`}>{alert.msg}</p>
        </div>
      </div>
    </div>
  )
}